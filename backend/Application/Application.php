<?php

declare(strict_types=1);

namespace Brewmap\Application;

use Brewmap\Collections\Breweries as BreweriesCollection;
use Brewmap\Collections\Builders\Breweries;
use Brewmap\Collections\Builders\Countries;
use Brewmap\Collections\Builders\Notes;
use Brewmap\Collections\Builders\Trips;
use Brewmap\Collections\Cities as CitiesCollection;
use Brewmap\Collections\Countries as CountriesCollection;
use Brewmap\Collections\GeoJson;
use Brewmap\Collections\Notes as NotesCollection;
use Brewmap\Collections\SearchList;
use Brewmap\Collections\Tags as TagsCollection;
use Brewmap\Collections\Trips as TripsCollection;
use Brewmap\Filesystem\DirectoryManager;
use Brewmap\Filesystem\FileManager;
use Brewmap\Filesystem\FilesManager;
use Brewmap\Mapbox\CountryBoundsService;
use Brewmap\Mappings\Cities as CitiesMapping;
use Brewmap\Models\Calendar\Calendar;
use Brewmap\Models\Calendar\Group;
use Brewmap\Models\Calendar\MonthDetailed;
use Brewmap\Models\Calendar\YearDetailed;
use Brewmap\Models\GeneralData;
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
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Collection;

class Application
{
    protected DirectoryManager $directoryManager;
    protected FileManager $fileManager;
    protected FilesManager $filesManager;

    public function __construct(
        protected string $rootPath,
        Dotenv $dotenv
    ) {
        $dotenv->load();

        $this->directoryManager = new DirectoryManager($this->rootPath);
        $this->fileManager = new FileManager($this->rootPath);
        $this->filesManager = new FilesManager($this->fileManager);
    }

    /**
     * @throws GuzzleException
     */
    public function build(): void
    {
        $this->prepareDirectories();

        $countriesData = file_get_contents($this->rootPath . "/resources/countries.json");
        $tripsFiles = new Collection(glob($this->rootPath . "/resources/trips/*.json"));
        $tripsData = $tripsFiles->map(fn(string $filename): string => file_get_contents($filename));

        $citiesMapping = CitiesMapping::buildFromJson(
            file_get_contents($this->rootPath . "/resources/mappings/cities.json")
        );

        $tags = new TagsCollection();
        $cities = new CitiesCollection($citiesMapping);
        $countries = Countries::buildFromJson($countriesData);
        $trips = Trips::buildFromFiles($tripsData, $countries, $cities, $tags);
        $breweries = Breweries::buildFromTrips($trips);
        $notes = Notes::buildFromBreweries($breweries);

        $generalData = GeneralDataBuilder::build($breweries, $countries);
        $calendar = CalendarBuilder::build($breweries);

        $this->prepareBreweriesDetails($breweries);
        $this->prepareBounds($countries, $trips, $tags, $calendar, $cities);
        $statistics = $this->prepareStatistics($breweries, $countries, $cities, $trips, $tags);

        $map = new GeoJson($breweries);
        $search = new SearchList($breweries);

        $this->saveToFiles(
            $calendar,
            $map,
            $search,
            $generalData,
            $countries,
            $trips,
            $breweries,
            $cities,
            $tags,
            $notes,
            $statistics
        );
    }

    protected function prepareDirectories(): void
    {
        $this->directoryManager->purge();

        $this->directoryManager->create("breweries");
        $this->directoryManager->create("calendar");
        $this->directoryManager->create("cities");
        $this->directoryManager->create("countries");
        $this->directoryManager->create("tags");
        $this->directoryManager->create("trips");
    }

    protected function prepareBreweriesDetails(BreweriesCollection $breweries): void
    {
        BreweryIndexer::index($breweries);
        BreweryToCountryAssigner::assign($breweries);
        BreweryToTagAssigner::assign($breweries);
        BreweryToCityAssigner::assign($breweries);
    }

    /**
     * @throws GuzzleException
     */
    protected function prepareBounds(
        CountriesCollection $countries,
        TripsCollection $trips,
        TagsCollection $tags,
        Calendar $calendar,
        CitiesCollection $cities
    ): void {
        CountryBoundsService::setBounds($countries);
        BoundsService::setBounds($trips->getAll());
        BoundsService::setBounds($tags->getAll());
        BoundsService::setBounds($calendar->getAll());
        BoundsService::setBounds($cities->getAll());
        $calendar->getAll()->each(fn(Group $group) => BoundsService::setBounds($group->getAll()));
    }

    protected function prepareStatistics(
        BreweriesCollection $breweries,
        CountriesCollection $countries,
        CitiesCollection $cities,
        TripsCollection $trips,
        TagsCollection $tags
    ): Statistics {
        $statistics = new Statistics();

        $statistics->setExtremes(ExtremesFinder::find($breweries->getAll()));
        $statistics->setWeekdays(WeekdaysCounter::count($breweries->getAll()));
        $statistics->setMonths(MonthsCounter::count($breweries->getAll()));
        $statistics->setCounter("breweries", $breweries->getAll()->count());
        $statistics->setCounter("countries", $countries->getAll()->count());
        $statistics->setCounter("cities", $cities->getAll()->count());
        $statistics->setCounter("trips", $trips->getAll()->count());
        $statistics->setCounter("tags", $tags->getAll()->count());

        return $statistics;
    }

    protected function saveToFiles(
        Calendar $calendar,
        GeoJson $map,
        SearchList $search,
        GeneralData $generalData,
        CountriesCollection $countries,
        TripsCollection $trips,
        BreweriesCollection $breweries,
        CitiesCollection $cities,
        TagsCollection $tags,
        NotesCollection $notes,
        Statistics $statistics
    ): void {
        $this->fileManager->save($calendar, "calendar.json");
        $this->fileManager->save($map, "map.json");
        $this->fileManager->save($search, "search.json");
        $this->fileManager->save($generalData, "general.json");
        $this->fileManager->save($countries, "countries.json");
        $this->fileManager->save($trips, "trips.json");
        $this->fileManager->save($breweries, "breweries.json");
        $this->fileManager->save($cities, "cities.json");
        $this->fileManager->save($tags, "tags.json");
        $this->fileManager->save($notes, "notes.json");
        $this->fileManager->save($statistics, "statistics.json");

        $this->filesManager->save($countries, "countries", CountryDetailed::class);
        $this->filesManager->save($breweries, "breweries", BreweryDetailed::class);
        $this->filesManager->save($trips, "trips", TripDetailed::class);
        $this->filesManager->save($tags, "tags", TagDetailed::class);
        $this->filesManager->save($cities, "cities", CityDetailed::class);
        $this->filesManager->save($calendar, "calendar", YearDetailed::class);

        foreach ($calendar->getAll() as $year) {
            $directory = "calendar/{$year->getSlug()}";
            $this->directoryManager->create($directory);
            $this->filesManager->save($year, $directory, MonthDetailed::class);
        }
    }
}
