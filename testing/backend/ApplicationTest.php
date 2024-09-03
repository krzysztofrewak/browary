<?php

declare(strict_types=1);

use Brewmap\Application\Application;
use Brewmap\Filesystem\DirectoryManager;
use Carbon\Carbon;
use Dotenv\Dotenv;
use GuzzleHttp\Exception\GuzzleException;
use PHPUnit\Framework\TestCase;

class ApplicationTest extends TestCase
{
    /**
     * @throws GuzzleException
     */
    public static function setUpBeforeClass(): void
    {
        $root = static::getFixturesDirectory();
        $dotenv = Dotenv::createImmutable($root);

        $application = new Application($root, $dotenv);
        $application->build();
    }

    public static function tearDownAfterClass(): void
    {
        $manager = new DirectoryManager(static::getFixturesDirectory());
        $manager->purge();
    }

    public function testBuiltGeneralData(): void
    {
        $data = $this->getApiFileContent("general.json");
        $this->assertSame(5, $data["counters"]["breweries"]);
        $this->assertSame(2, $data["counters"]["countries"]);
        $this->assertSame("48.203395", $data["extremes"]["north"]);
        $this->assertSame("20.984165", $data["extremes"]["east"]);
        $this->assertSame("54.349342", $data["extremes"]["south"]);
        $this->assertSame("16.356550", $data["extremes"]["west"]);
    }

    public function testBuiltStatistics(): void
    {
        $statistics = $this->getApiFileContent("statistics.json");
        $this->assertSame(5, $statistics["counters"]["breweries"]);
        $this->assertSame(2, $statistics["counters"]["countries"]);
        $this->assertSame(4, $statistics["counters"]["cities"]);
        $this->assertSame(2, $statistics["counters"]["trips"]);
        $this->assertSame(9, $statistics["counters"]["tags"]);
    }

    public function testBuiltCalendar(): void
    {
        $calendar = $this->getApiFileContent("calendar.json");
        $this->assertSame(3, $calendar["maxValue"]);
        $this->assertCount(Carbon::now()->year - 2020 + 1, $calendar["groups"]);
    }

    public function testCitiesMappings(): void
    {
        $city = $this->getApiFileContent("cities/wien.json");
        $this->assertSame("Wiedeń", $city["translation"]);
    }

    protected static function getFixturesDirectory(): string
    {
        return __DIR__ . "/fixtures/";
    }

    protected function getApiFileContent(string $file): array
    {
        $content = file_get_contents(static::getFixturesDirectory() . "public/api/" . $file);

        return json_decode($content, true);
    }
}
