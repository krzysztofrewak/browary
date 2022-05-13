<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use JsonSerializable;

class YearDetailed implements JsonSerializable
{
    public function __construct(
        protected Group $group,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->group->getSlug(),
            "slug" => $this->group->getSlug(),
            "counters" => [
                "breweries" => $this->group->getBreweriesCount(),
                "countries" => $this->group->getCountriesCount(),
                "trips" => $this->group->getTripsCount(),
                "cities" => $this->group->getCitiesCount(),
            ],
            "extremes" => $this->group->getExtremes(),
            "breweries" => $this->group->getBreweries(),
            "maxValue" => $this->group->findMaxValue(),
            "months" => $this->group->getAll(),
        ];
    }
}
