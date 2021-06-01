<?php

declare(strict_types=1);

namespace Brewmap\Collections\Builders;

use Brewmap\Collections\Breweries;
use Brewmap\Collections\Cities as CitiesCollection;
use Brewmap\Models\City;

class Cities
{
    public static function buildFromBreweries(Breweries $breweries): CitiesCollection
    {
        $cities = new CitiesCollection();

        foreach ($breweries->getAll() as $brewery) {
            $city = new City($brewery->getCity());
            $cities->addCity($city);
        }

        return $cities;
    }
}
