<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

final class Note implements JsonSerializable
{
    private Brewery $brewery;

    public function __construct(Brewery $brewery)
    {
        $this->brewery = $brewery;
    }

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
