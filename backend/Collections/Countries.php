<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Country;
use Brewmap\Models\Mappers\GeneralCountry;
use Illuminate\Support\Collection;
use JsonSerializable;

class Countries implements JsonSerializable, HavingAll
{
    protected Collection $countries;

    public function __construct()
    {
        $this->countries = new Collection();
    }

    public function addCountry(Country $country): static
    {
        $this->countries->put($country->getSymbol(), $country);

        return $this;
    }

    public function getCountryBySymbol(string $symbol): Country
    {
        return $this->countries->get($symbol);
    }

    public function getAll(): Collection
    {
        return $this->countries;
    }

    public function getHash(): string
    {
        return $this->countries->map(fn(Country $country) => $country->getSymbol())->join(":");
    }

    public function jsonSerialize(): Collection
    {
        return $this->countries->sort(
            fn(Country $a, Country $b): int => $a->getBreweriesCount() === $b->getBreweriesCount()
                ? $a->getName() <=> $b->getName()
                : $b->getBreweriesCount() <=> $a->getBreweriesCount(),
        )
            ->filter(fn(Country $country): bool => $country->getBreweriesCount() > 0)
            ->mapInto(GeneralCountry::class);
    }
}
