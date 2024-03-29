<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class Note implements JsonSerializable
{
    public function __construct(
        protected Brewery $brewery,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "note" => $this->brewery->getNote(),
            "brewery" => [
                "name" => $this->brewery->getName(),
                "slug" => $this->brewery->getSlug(),
                "country" => $this->brewery->getCountry(),
                "city" => $this->brewery->getCity(),
            ],
        ];
    }
}
