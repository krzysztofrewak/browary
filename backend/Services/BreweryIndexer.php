<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;

final class BreweryIndexer
{
    public static function index(Breweries $breweries): void
    {
        $i = 1;
        foreach ($breweries->getAll()->reverse() as $brewery) {
            $brewery->setId($i++);
        }
    }
}