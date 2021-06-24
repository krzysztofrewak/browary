<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Trip;
use Illuminate\Support\Collection;
use JsonSerializable;

class Trips implements JsonSerializable, HavingAll
{
    protected Collection $trips;

    public function __construct()
    {
        $this->trips = new Collection();
    }

    public function addTrip(Trip $trip): static
    {
        $this->trips->put($trip->getSlug(), $trip);
        return $this;
    }

    public function getAll(): Collection
    {
        return $this->trips;
    }

    public function jsonSerialize(): array
    {
        return $this->trips
            ->filter(fn(Trip $trip): bool => $trip->getBreweries()->count() > 1)
            ->toArray();
    }
}
