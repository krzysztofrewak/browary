<?php

declare(strict_types=1);

namespace Brewmap\Interfaces;

use Illuminate\Support\Collection;

interface HavingAll
{
    /**
     * @return Collection|Sluggable[]
     */
    public function getAll(): Collection;
}
