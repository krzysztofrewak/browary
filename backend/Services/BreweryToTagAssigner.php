<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;

class BreweryToTagAssigner
{
    public static function assign(Breweries $breweries): void
    {
        foreach ($breweries->getAll() as $brewery) {
            foreach ($brewery->getTags() as $tag) {
                $tag->addBrewery($brewery);
            }
        }
    }
}
