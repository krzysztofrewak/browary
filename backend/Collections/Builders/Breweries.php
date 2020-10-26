<?php

declare(strict_types=1);

namespace Brewmap\Collections\Builders;

use Brewmap\Collections\Breweries as BreweriesCollection;
use Brewmap\Collections\Trips;

final class Breweries
{
    public static function buildFromTrips(Trips $trips): BreweriesCollection
    {
        $breweries = new BreweriesCollection();

        foreach ($trips->getAll() as $trip) {
            foreach ($trip->getBreweries() as $brewery) {
                $breweries->addBrewery($brewery);
            }
        }

        return $breweries;
    }
}
