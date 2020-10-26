<?php

declare(strict_types=1);

namespace Brewmap\Models\Mappers;

use Brewmap\Models\Tag;
use JsonSerializable;

final class TagDetailed implements JsonSerializable
{
    private Tag $tag;

    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->tag->getName(),
            "slug" => $this->tag->getSlug(),
            "extremes" => $this->tag->getExtremes(),
            "breweries" => $this->tag->getBreweries()->reverse()->values()->all(),
            "breweriesCount" => $this->tag->getBreweries()->count(),
        ];
    }
}
