<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

final class BreweryCountry implements JsonSerializable
{
    private string $name;
    private string $symbol;
    private string $slug;

    public function __construct(Country $country)
    {
        $this->name = $country->getName();
        $this->symbol = $country->getSymbol();
        $this->slug = $country->getSlug();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "symbol" => $this->symbol,
            "slug" => $this->slug,
        ];
    }
}
