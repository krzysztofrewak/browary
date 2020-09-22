<?php

declare(strict_types=1);

namespace Brewmap\Collections\Builders;

use Brewmap\Collections\Countries;
use Brewmap\Collections\Tags;
use Brewmap\Collections\Trips as TripsCollection;
use Brewmap\Models\Brewery;
use Brewmap\Models\Coordinates;
use Brewmap\Models\Location;
use Brewmap\Models\Trip;
use Carbon\Carbon;
use Illuminate\Support\Collection;

final class Trips
{
    public static function buildFromFiles(Collection $tripsData, Countries $countries, Tags $tags): TripsCollection
    {
        $trips = new TripsCollection();

        $tripsData->reverse()->each(
            function (string $jsonFile) use ($trips, $countries, $tags): void {
                $data = json_decode($jsonFile, true);
                $trip = new Trip($data["name"]);

                foreach (collect($data["breweries"])->reverse() as $breweryData) {
                    $latitude = $breweryData["location"]["coordinates"]["lat"];
                    $longitude = $breweryData["location"]["coordinates"]["lng"];
                    $coordinates = new Coordinates($latitude, $longitude);

                    $country = $countries->getCountryBySymbol($breweryData["location"]["country"]);
                    $city = $breweryData["location"]["city"];
                    $address = $breweryData["location"]["address"];
                    $location = new Location($coordinates, $country, $city, $address);

                    $date = Carbon::parse($breweryData["visited"]);
                    $note = $breweryData["note"] ?? "";

                    $brewery = new Brewery($breweryData["name"], $location, $date, $trip, $note);

                    foreach ($breweryData["tags"] as $tag) {
                        $tag = $tags->firstOrCreate($tag);
                        $brewery->addTag($tag);
                    }

                    $trip->addBrewery($brewery);
                }

                $trips->addTrip($trip);
            }
        );

        return $trips;
    }
}