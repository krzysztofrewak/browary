<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Models\Brewery;
use JsonSerializable;

class SearchList implements JsonSerializable
{
    public function __construct(
        protected Breweries $breweries,
    ) {}

    public function jsonSerialize(): array
    {
        return $this->breweries
            ->getAll()
            ->values()
            ->map(
                fn(Brewery $brewery): array => [
                    "searchable" => $brewery->getSlug() . " " . $brewery->getName() . " " . ($brewery->getAltName() ?? ""),
                    "name" => $brewery->getName(),
                    "slug" => $brewery->getSlug(),
                    "description" => $this->getBreweryName($brewery),
                    "symbol" => $brewery->getCountry()->getSymbol(),
                    "center" => $brewery->getCoordinates(),
                ],
            )
            ->toArray();
    }

    protected function getBreweryName(Brewery $brewery): string
    {
        $city = $brewery->getCity()->getName();
        $country = $brewery->getCountry()->getName();

        return "browar ({$city}, {$country})";
    }
}
