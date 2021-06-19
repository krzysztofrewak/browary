<?php

declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

use Brewmap\Collections\Builders\Breweries;
use Brewmap\Collections\Builders\Countries;
use Brewmap\Collections\Builders\Notes;
use Brewmap\Collections\Builders\Trips;
use Brewmap\Collections\Cities;
use Brewmap\Collections\GeoJson;
use Brewmap\Collections\Tags;
use Brewmap\Filesystem\Directory;
use Brewmap\Filesystem\File;
use Brewmap\Filesystem\Files;
use Brewmap\Mapbox\CountryBoundsService;
use Brewmap\Models\Calendar\Group;
use Brewmap\Models\Calendar\MonthDetailed;
use Brewmap\Models\Calendar\YearDetailed;
use Brewmap\Models\Mappers\BreweryDetailed;
use Brewmap\Models\Mappers\CityDetailed;
use Brewmap\Models\Mappers\CountryDetailed;
use Brewmap\Models\Mappers\TagDetailed;
use Brewmap\Models\Mappers\TripDetailed;
use Brewmap\Models\Statistics;
use Brewmap\Services\BoundsService;
use Brewmap\Services\BreweryIndexer;
use Brewmap\Services\BreweryToCityAssigner;
use Brewmap\Services\BreweryToCountryAssigner;
use Brewmap\Services\BreweryToTagAssigner;
use Brewmap\Services\CalendarBuilder;
use Brewmap\Services\GeneralDataBuilder;
use Brewmap\Services\Statistics\ExtremesFinder;
use Brewmap\Services\Statistics\MonthsCounter;
use Brewmap\Services\Statistics\WeekdaysCounter;
use Dotenv\Dotenv;
use Illuminate\Support\Collection;

$dotenv = Dotenv::createImmutable(__DIR__ . "/../");
$dotenv->load();

Directory::purge();

Directory::create("breweries");
Directory::create("calendar");
Directory::create("cities");
Directory::create("countries");
Directory::create("tags");
Directory::create("trips");

$countriesData = file_get_contents(__DIR__ . "/../resources/countries.json");
$tripsFiles = new Collection(glob(__DIR__ . "/../resources/trips/*.json"));
$tripsData = $tripsFiles->map(
    fn(string $filename): string => file_get_contents($filename)
);

$tags = new Tags();
$cities = new Cities();
$countries = Countries::buildFromJson($countriesData);
$trips = Trips::buildFromFiles($tripsData, $countries, $cities, $tags);
$breweries = Breweries::buildFromTrips($trips);
$notes = Notes::buildFromBreweries($breweries);

$generalData = GeneralDataBuilder::build($breweries, $countries);
$calendar = CalendarBuilder::build($breweries);

BreweryIndexer::index($breweries);
BreweryToCountryAssigner::assign($breweries);
BreweryToTagAssigner::assign($breweries);
BreweryToCityAssigner::assign($breweries);
CountryBoundsService::setBounds($countries);

BoundsService::setBounds($trips->getAll());
BoundsService::setBounds($tags->getAll());
BoundsService::setBounds($calendar->getAll());
BoundsService::setBounds($cities->getAll());
$calendar->getAll()->each(fn(Group $group) => BoundsService::setBounds($group->getAll()));

$statistics = new Statistics();
$statistics->setExtremes(ExtremesFinder::find($breweries->getAll()));
$statistics->setWeekdays(WeekdaysCounter::count($breweries->getAll()));
$statistics->setMonths(MonthsCounter::count($breweries->getAll()));
$statistics->setCounter("breweries", $breweries->getAll()->count());
$statistics->setCounter("countries", $countries->getAll()->count());
$statistics->setCounter("cities", $cities->getAll()->count());
$statistics->setCounter("trips", $trips->getAll()->count());
$statistics->setCounter("tags", $tags->getAll()->count());

$map = new GeoJson($breweries);

File::save($calendar, "calendar.json");
File::save($map, "map.json");
File::save($generalData, "general.json");
File::save($countries, "countries.json");
File::save($trips, "trips.json");
File::save($breweries, "breweries.json");
File::save($cities, "cities.json");
File::save($tags, "tags.json");
File::save($notes, "notes.json");
File::save($statistics, "statistics.json");

Files::save($countries, "countries", CountryDetailed::class);
Files::save($breweries, "breweries", BreweryDetailed::class);
Files::save($trips, "trips", TripDetailed::class);
Files::save($tags, "tags", TagDetailed::class);
Files::save($cities, "cities", CityDetailed::class);
Files::save($calendar, "calendar", YearDetailed::class);
foreach ($calendar->getAll() as $year) {
    $directory = "calendar/{$year->getSlug()}";
    Directory::create($directory);
    Files::save($year, $directory, MonthDetailed::class);
}
