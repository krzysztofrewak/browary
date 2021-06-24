<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;

class BreweryToCityAssigner
{
    public static function assign(Breweries $breweries): void
    {
        foreach ($breweries->getAll() as $brewery) {
            $brewery->getCity()->addBrewery($brewery);
        }
    }
}
