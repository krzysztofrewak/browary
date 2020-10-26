<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\City;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Cities implements JsonSerializable, HavingAll
{
    /** @var Collection|City[] */
    private Collection $cities;

    public function __construct()
    {
        $this->cities = new Collection();
    }

    public function addCity(City $city): self
    {
        $this->cities->put($city->getSlug(), $city);
        return $this;
    }

    /** @return Collection|City[] */
    public function getAll(): Collection
    {
        return $this->cities;
    }

    public function jsonSerialize(): Collection
    {
        return $this->cities;
    }
}
