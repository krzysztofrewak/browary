<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\City;
use Illuminate\Support\Collection;
use JsonSerializable;

class Cities implements JsonSerializable, HavingAll
{
    protected Collection $cities;

    public function __construct()
    {
        $this->cities = new Collection();
    }

    public function addCity(City $city): static
    {
        $this->cities->put($city->getSlug(), $city);
        return $this;
    }

    public function getAll(): Collection
    {
        return $this->cities;
    }

    public function jsonSerialize(): Collection
    {
        return $this->cities;
    }
}
