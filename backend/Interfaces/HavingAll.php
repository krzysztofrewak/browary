<?php

declare(strict_types=1);

namespace Brewmap\Interfaces;

use Illuminate\Support\Collection;

interface HavingAll
{
    public function getAll(): Collection;
}
