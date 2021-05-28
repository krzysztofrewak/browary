<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use JsonSerializable;

final class YearDetailed implements JsonSerializable
{
    private Group $group;

    public function __construct(Group $group)
    {
        $this->group = $group;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->group->getSlug(),
            "slug" => $this->group->getSlug(),
            "stats" => [
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
