<?php

declare(strict_types=1);

namespace Brewmap\Interfaces;

use JsonSerializable;

interface Sluggable extends JsonSerializable
{
    public function getSlug(): string;
}