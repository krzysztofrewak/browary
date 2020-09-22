<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Trip;
use JsonSerializable;

final class GeneralTrip implements JsonSerializable
{
    private Trip $trip;

    public function __construct(Trip $trip)
    {
        $this->trip = $trip;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->trip->getName(),
            "slug" => $this->trip->getSlug(),
        ];
    }
}