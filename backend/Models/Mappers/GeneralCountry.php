<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

final class GeneralCountry implements JsonSerializable
{
    private string $name;
    private string $symbol;
    private string $slug;
    private int $breweries;

    public function __construct(Country $country)
    {
        $this->name = $country->getName();
        $this->symbol = $country->getSymbol();
        $this->slug = $country->getSlug();
        $this->breweries = $country->getBreweriesCount();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "symbol" => $this->symbol,
            "slug" => $this->slug,
            "breweries" => $this->breweries,
        ];
    }
}