<?php

declare(strict_types=1);

namespace Brewmap\Interfaces;

use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

interface Boundable
{
    public function setExtremes(Extremes $extremes): static;

    public function getExtremes(): ?Extremes;

    public function getBreweries(): Collection;
}
