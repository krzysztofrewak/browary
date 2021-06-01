<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Models\Mappers\BreweryCountry;
use JsonSerializable;

class Location implements JsonSerializable
{
    protected Coordinates $coordinates;
    protected Country $country;
    protected string $city;
    protected string $address;

    public function __construct(Coordinates $coordinates, Country $country, string $city, string $address)
    {
        $this->country = $country;
        $this->coordinates = $coordinates;
        $this->city = $city;
        $this->address = $address;
    }

    public function getCountry(): Country
    {
        return $this->country;
    }

    public function getCity(): string
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
