<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\City;
use JsonSerializable;

class CityDetailed implements JsonSerializable
{
    public function __construct(
        protected City $city,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->city->getName(),
            "translation" => $this->city->getTranslation(),
            "extremes" => $this->city->getExtremes(),
            "breweries" => $this->city->getBreweries(),
        ];
    }
}
