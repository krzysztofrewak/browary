<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use JsonSerializable;

class MonthDetailed implements JsonSerializable
{
    protected Item $item;

    public function __construct(Item $item)
    {
        $this->item = $item;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->item->getLabel(),
            "slug" => $this->item->getSlug(),
            "extremes" => $this->item->getExtremes(),
            "breweries" => $this->item->getBreweries()->reverse()->values()->all(),
            "counters" => [
                "breweries" => $this->item->getBreweriesCount(),
                "countries" => $this->item->getCountriesCount(),
                "trips" => $this->item->getTripsCount(),
                "cities" => $this->item->getCitiesCount(),
            ],
        ];
    }
}
