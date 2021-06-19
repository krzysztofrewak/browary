<?php

declare(strict_types=1);

use Carbon\Carbon;
use Illuminate\Support\Collection;
use PHPUnit\Framework\TestCase;

class TripsTest extends TestCase
{
    public function testTripsFilesIntegrity(): void
    {
        $tripFiles = new Collection(glob(__DIR__ . "/../../resources/trips/*.json"));

        foreach ($tripFiles as $filename) {
            $trip = json_decode(file_get_contents($filename), true);
            $this->assertIsArray($trip);
            $this->assertArrayHasKey("name", $trip);
            $this->assertArrayHasKey("breweries", $trip);
            $this->assertCount(2, $trip, "There's a different number of fields for " . $trip["name"]);

            $this->assertIsArray($trip["breweries"]);
            foreach ($trip["breweries"] as $brewery) {
                $this->assertArrayHasKey("name", $brewery);
                $this->assertArrayHasKey("visited", $brewery);
                $this->assertTrue(Carbon::parse($brewery["visited"])->isValid());

                $this->assertArrayHasKey("location", $brewery);
                $this->assertArrayHasKey("country", $brewery["location"]);
                $this->assertArrayHasKey("city", $brewery["location"]);
                $this->assertArrayHasKey("address", $brewery["location"]);
                $this->assertArrayHasKey("lat", $brewery["location"]["coordinates"]);
                $this->assertArrayHasKey("lng", $brewery["location"]["coordinates"]);
                $this->assertIsFloat($brewery["location"]["coordinates"]["lat"]);
                $this->assertIsFloat($brewery["location"]["coordinates"]["lng"]);

                $this->assertArrayHasKey("tags", $brewery);
                $this->assertIsArray($brewery["tags"]);
                foreach ($brewery["tags"] as $tag) {
                    $this->assertIsString($tag);
                }

                $this->assertContains(
                    sizeof($brewery),
                    [4, 5],
                    "There's a wrong number of fields for " . $brewery["name"]
                );
            }
        }
    }

    public function testIfSymbolsAreValid(): void
    {
        $countries = json_decode(file_get_contents(__DIR__ . "/../../resources/countries.json"), true);
        $countries = new Collection($countries["countries"]);
        $symbols = $countries->map(fn(array $country): string => $country["symbol"]);

        $tripFiles = new Collection(glob(__DIR__ . "/../../resources/trips/*.json"));

        foreach ($tripFiles as $filename) {
            $trip = json_decode(file_get_contents($filename), true);

            foreach ($trip["breweries"] as $brewery) {
                $this->assertContains(
                    $brewery["location"]["country"],
                    $symbols,
                    "Unidentified country symbol was used for " . $brewery["name"]
                );
            }
        }
    }
}
