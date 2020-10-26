<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use JsonSerializable;

final class MonthDetailed implements JsonSerializable
{
    private Item $item;

    public function __construct(Item $item)
    {
        $this->item = $item;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->item->getLabel(),
            "slug" => $this->item->getSlug(),
            "extremes" => $this->item->getExtremes(),
            "breweries" => $this->item->getBreweries()->reverse()->values()->all(),
        ];
    }
}
