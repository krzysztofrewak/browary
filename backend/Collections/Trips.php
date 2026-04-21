<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Brewery;
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

    public function getLongestTrip(): array
    {
        $longestTrip = $this->getAll()
            ->map(function (Trip $trip) {
                $dates = $trip->getBreweries()
                    ->map(fn(Brewery $brewery) => $brewery->getDate()->copy()->startOfDay())
                    ->sort()
                    ->values();

                $startDate = $dates->first();
                $endDate = $dates->last();
                $days = $startDate->diffInDays($endDate) + 1;

                return [
                    "trip" => $trip,
                    "days" => $days,
                    "startDate" => $startDate,
                    "endDate" => $endDate,
                ];
            })
            ->sortByDesc("days")
            ->first();

        return [(int)$longestTrip["days"], $longestTrip["startDate"]->locale("pl")->translatedFormat("F Y")];
    }

    public function jsonSerialize(): array
    {
        return $this->trips
            ->filter(fn(Trip $trip): bool => $trip->getBreweries()->count() > 0)
            ->toArray();
    }
}
