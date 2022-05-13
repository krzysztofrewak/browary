<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Trip;
use JsonSerializable;

class GeneralTrip implements JsonSerializable
{
    public function __construct(
        protected Trip $trip,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->trip->getName(),
            "slug" => $this->trip->getSlug(),
        ];
    }
}
