<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Models\Mappers\BreweryCountry;
use JsonSerializable;

class Location implements JsonSerializable
{
    public function __construct(
        protected Coordinates $coordinates,
        protected Country $country,
        protected City $city,
        protected string $address,
    ) {}

    public function getCountry(): Country
    {
        return $this->country;
    }

    public function getCity(): City
    {
        return $this->city;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function getCoordinates(): Coordinates
    {
        return $this->coordinates;
    }

    public function jsonSerialize(): array
    {
        return [
            "country" => new BreweryCountry($this->country),
            "coordinates" => $this->coordinates,
            "city" => $this->city,
            "address" => $this->address,
        ];
    }
}
