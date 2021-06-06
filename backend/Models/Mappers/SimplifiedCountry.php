<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Country;
use JsonSerializable;

class SimplifiedCountry implements JsonSerializable
{
    protected Country $country;

    public function __construct(Country $country)
    {
        $this->country = $country;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->country->getName(),
            "symbol" => $this->country->getSymbol(),
            "slug" => $this->country->getSlug(),
        ];
    }
}
