<?php

declare(strict_types=1);

require "../vendor/autoload.php";

use Brewmap\Collections\Builders\Breweries;
use Brewmap\Collections\Builders\Countries;
use Brewmap\Collections\Builders\Trips;
use Brewmap\Collections\GeoJson;
use Brewmap\Filesystem\Directory;
use Brewmap\Filesystem\File;
use Brewmap\Filesystem\Files;
use Brewmap\Mapbox\CountryBoundsService;
use Brewmap\Models\Calendar\MonthDetailed;
use Brewmap\Models\Calendar\YearDetailed;
use Brewmap\Models\Mappers\BreweryDetailed;
use Brewmap\Models\Mappers\CountryDetailed;
use Brewmap\Models\Mappers\TripDetailed;
use Brewmap\Services\BreweryIndexer;
use Brewmap\Services\BreweryToCountryAssigner;
use Brewmap\Services\CalendarBuilder;
use Brewmap\Services\GeneralDataBuilder;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("../");
$dotenv->load();

Directory::create("breweries");
Directory::create("calendar");
Directory::create("cities");
Directory::create("countries");
Directory::create("trips");

$countriesData = file_get_contents("../resources/countries.json");
$tripsData = collect(glob("../resources/trips/*.json"))->map(fn(string $filename): string => file_get_contents($filename));

$countries = Countries::buildFromJson($countriesData);
$trips = Trips::buildFromFiles($tripsData, $countries);
$breweries = Breweries::buildFromTrips($trips);
$generalData = GeneralDataBuilder::build($breweries, $countries);
$calendar = CalendarBuilder::build($breweries);

BreweryToCountryAssigner::assign($breweries);
BreweryIndexer::index($breweries);

$countryBoundsService = new CountryBoundsService();
$countryBoundsService->findBounds($countries->getAll());

File::save($calendar, "calendar.json");
File::save(new GeoJson($breweries), "map.json");
File::save($generalData, "general.json");
File::save($countries, "countries.json");
File::save($trips, "trips.json");
File::save($breweries, "breweries.json");

Files::save($countries, "countries", CountryDetailed::class);
Files::save($breweries, "breweries", BreweryDetailed::class);
Files::save($trips, "trips", TripDetailed::class);
Files::save($calendar, "calendar", YearDetailed::class);
foreach ($calendar->getAll() as $year) {
    $directory = "calendar/{$year->getSlug()}";
    Directory::create($directory);
    Files::save($year, $directory, MonthDetailed::class);
}
