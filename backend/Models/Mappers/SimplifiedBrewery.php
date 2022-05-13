<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Brewery;
use JsonSerializable;

class SimplifiedBrewery implements JsonSerializable
{
    public function __construct(
        protected Brewery $brewery,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->brewery->getName(),
            "slug" => $this->brewery->getSlug(),
        ];
    }
}
