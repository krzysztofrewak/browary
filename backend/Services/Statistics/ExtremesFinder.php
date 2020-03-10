<?php

declare(strict_types=1);

namespace Brewmap\Services\Statistics;

use Brewmap\Models\Brewery;
use Illuminate\Support\Collection;

final class ExtremesFinder
{
    public static function find(Collection $breweries): array
    {
        $latitude = $breweries->sort(fn(Brewery $a, Brewery $b): int => $b->getCoordinates()
                ->getLatitude() <=> $a->getCoordinates()->getLatitude());
        $longitude = $breweries->sort(fn(Brewery $a, Brewery $b): int => $b->getCoordinates()
                ->getLongitude() <=> $a->getCoordinates()->getLongitude());

        return [
            "north" => $latitude->first(),
            "east" => $longitude->first(),
            "south" => $latitude->last(),
            "west" => $longitude->last(),
        ];
    }
}
