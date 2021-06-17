<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

class GeneralCountry implements JsonSerializable
{
    protected string $name;
    protected string $original;
    protected string $symbol;
    protected string $slug;
    protected int $breweries;
    protected int $trips;

    public function __construct(Country $country)
    {
        $this->name = $country->getName();
        $this->original = $country->getOriginalName();
        $this->symbol = $country->getSymbol();
        $this->slug = $country->getSlug();
        $this->breweries = $country->getBreweriesCount();
        $this->trips = $country->getTripsCount();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "original" => $this->original,
            "symbol" => $this->symbol,
            "slug" => $this->slug,
            "stats" => [
                "breweries" => $this->breweries,
                "trips" => $this->trips,
            ],
        ];
    }
}
