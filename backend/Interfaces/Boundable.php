<?php

declare(strict_types=1);

namespace Brewmap\Interfaces;

use Brewmap\Models\Brewery;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

interface Boundable
{
    public function setExtremes(Extremes $extremes): Boundable;

    public function getExtremes(): ?Extremes;

    /** @return Collection|Brewery[] */
    public function getBreweries(): Collection;
}