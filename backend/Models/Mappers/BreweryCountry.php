<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

class BreweryCountry implements JsonSerializable
{
    protected string $name;
    protected string $symbol;
    protected string $slug;

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
