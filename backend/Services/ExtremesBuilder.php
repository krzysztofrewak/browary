<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Models\Brewery;
use Brewmap\Models\Coordinates;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

final class ExtremesBuilder
{
    public static function build(Collection $breweries): Extremes
    {
        $coordinates = $breweries->map(fn(Brewery $brewery): Coordinates => $brewery->getCoordinates());
        $latitude = $coordinates->sort(fn(Coordinates $a, Coordinates $b): int => $a->getLatitude() <=> $b->getLatitude())
            ->map(fn(Coordinates $coordinates): string => (string)$coordinates->getLatitude());
        $longitude = $coordinates->sort(fn(Coordinates $a, Coordinates $b): int => $a->getLongitude() <=> $b->getLongitude())
            ->map(fn(Coordinates $coordinates): string => (string)$coordinates->getLongitude());

        $extremes = new Extremes();
        return $extremes->set($latitude->first(), $longitude->last(), $latitude->last(), $longitude->first());
    }
}