<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Interfaces\Boundable;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

final class BoundsService
{
    /** @param Collection|Boundable[] $collection */
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

                if (is_null($north) || $latitude > $north) {
                    $north = $latitude;
                }

                if (is_null($south) || $latitude < $south) {
                    $south = $latitude;
                }

                if (is_null($west) || $longitude > $west) {
                    $west = $longitude;
                }

                if (is_null($east) || $longitude < $east) {
                    $east = $longitude;
                }
            }

            $extremes = new Extremes();
            $extremes->setNorth((string)$north);
            $extremes->setEast((string)$east);
            $extremes->setSouth((string)$south);
            $extremes->setWest((string)$west);

            $item->setExtremes($extremes);
        }
    }
}