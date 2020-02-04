<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;

final class BreweryToCountryAssigner
{
    public static function assign(Breweries $breweries): void
    {
        foreach ($breweries->getAll() as $brewery) {
            $brewery->getCountry()->addBrewery($brewery);
        }
    }
}