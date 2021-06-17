<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Trip;
use JsonSerializable;

class TripDetailed implements JsonSerializable
{
    protected Trip $trip;

    public function __construct(Trip $trip)
    {
        $this->trip = $trip;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->trip->getName(),
            "slug" => $this->trip->getSlug(),
            "extremes" => $this->trip->getExtremes(),
            "counters" => [
                "breweries" => $this->trip->getBreweriesCount(),
                "countries" => $this->trip->getCountriesCount(),
                "cities" => $this->trip->getCitiesCount(),
            ],
            "breweries" => $this->trip->getBreweries()->reverse(),
            "countries" => $this->trip->getCountries(),
        ];
    }
}
