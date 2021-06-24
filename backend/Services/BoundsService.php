<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Interfaces\Boundable;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

class BoundsService
{
    /**
     * @param Collection|Boundable[] $collection
     */
    public static function setBounds(Collection $collection): void
    {
        foreach ($collection as $item) {
            $north = null;
            $east = null;
            $south = null;
            $west = null;

            foreach ($item->getBreweries() as $brewery) {
                $latitude = $brewery->getCoordinates()->getLatitude();
                $longitude = $brewery->getCoordinates()->getLongitude();

                if ($north === null || $latitude > $north) {
                    $north = $latitude;
                }

                if ($south === null || $latitude < $south) {
                    $south = $latitude;
                }

                if ($west === null || $longitude > $west) {
                    $west = $longitude;
                }

                if ($east === null || $longitude < $east) {
                    $east = $longitude;
                }
            }

            $extremes = new Extremes(
                north: (string)$north,
                east: (string)$east,
                south: (string)$south,
                west: (string)$west,
            );

            $item->setExtremes($extremes);
        }
    }
}
