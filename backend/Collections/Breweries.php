<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Brewery;
use Brewmap\Services\BreweriesUniqueSlugService;
use Illuminate\Support\Collection;
use JsonSerializable;

class Breweries implements JsonSerializable, HavingAll
{
    protected Collection $breweries;
    protected BreweriesUniqueSlugService $slugService;

    public function __construct()
    {
        $this->breweries = new Collection();
        $this->slugService = new BreweriesUniqueSlugService();
    }

    public function addBrewery(Brewery $brewery): static
    {
        $this->slugService->process($brewery);
        $this->breweries->put($brewery->getSlug(), $brewery);

        return $this;
    }

    /**
     * @return Collection<Brewery>
     */
    public function getAll(): Collection
    {
        return $this->breweries;
    }

    public function jsonSerialize(): Collection
    {
        return $this->breweries;
    }
}
