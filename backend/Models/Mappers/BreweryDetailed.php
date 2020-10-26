<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Brewery;
use JsonSerializable;

final class BreweryDetailed implements JsonSerializable
{
    private Brewery $brewery;

    public function __construct(Brewery $brewery)
    {
        $this->brewery = $brewery;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->brewery->getName(),
            "slug" => $this->brewery->getSlug(),
            "note" => $this->brewery->getNote(),
            "location" => $this->brewery->getLocation(),
            "date" => $this->brewery->getFullDate(),
            "trip" => new GeneralTrip($this->brewery->getTrip()),
            "tags" => $this->brewery->getTags()->toArray(),
        ];
    }
}
