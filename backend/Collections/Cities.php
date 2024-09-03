<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\City;
use Brewmap\Models\Country;
use Illuminate\Support\Collection;
use JsonSerializable;

class Cities implements JsonSerializable, HavingAll
{
    protected Collection $cities;

    public function __construct(
        protected array $mappings = [],
    ) {
        $this->cities = new Collection();
    }

    public function firstOrCreate(string $name, Country $country): City
    {
        $translation = $this->mappings[$name]["translation"] ?? "";
        $slug = $this->mappings[$name]["slug"] ?? City::slug($name);

        $alreadyExisting = $this->cities->get($slug);

        if ($alreadyExisting) {
            return $alreadyExisting;
        }

        $city = new City($name, $country, $translation, $slug);
        $this->cities->put($city->getSlug(), $city);

        return $city;
    }

    public function getAll(): Collection
    {
        return $this->cities
            ->sort(fn(City $a, City $b): int => $b->getBreweries()->count() <=> $a->getBreweries()->count());
    }

    public function jsonSerialize(): array
    {
        return $this->getAll()
            ->filter(fn(City $city): bool => $city->getBreweries()->count() > 1)
            ->toArray();
    }
}
