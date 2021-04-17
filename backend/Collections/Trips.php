<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Trip;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Trips implements JsonSerializable, HavingAll
{
    /** @var Collection|Trip[] */
    private Collection $trips;

    public function __construct()
    {
        $this->trips = new Collection();
    }

    public function addTrip(Trip $trip): self
    {
        $this->trips->put($trip->getSlug(), $trip);
        return $this;
    }

    /**
     * @return Collection|Trip[]
     */
    public function getAll(): Collection
    {
        return $this->trips;
    }

    public function jsonSerialize(): array
    {
        return $this->trips->filter(fn(Trip $trip): bool => $trip->getBreweries()->count() > 1)->toArray();
    }
}
