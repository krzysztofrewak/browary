<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

final class CountryDetailed implements JsonSerializable
{
    private Country $country;

    public function __construct(Country $country)
    {
        $this->country = $country;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->country->getName(),
            "original" => $this->country->getOriginalName(),
            "symbol" => $this->country->getSymbol(),
            "slug" => $this->country->getSlug(),
            "extremes" => $this->country->getExtremes(),
            "breweries" => $this->country->getBreweries(),
            "stats" => [
                "breweries" => $this->country->getBreweriesCount(),
                "trips" => $this->country->getTripsCount(),
                "cities" => $this->country->getCitiesCount(),
            ],
        ];
    }
}
