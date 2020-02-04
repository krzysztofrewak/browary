<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Illuminate\Support\Collection;
use JsonSerializable;

final class YearDetailed implements JsonSerializable
{
    protected Group $group;

    public function __construct(Group $group)
    {
        $this->group = $group;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->group->getSlug(),
            "breweries" => $this->group->getAll()
                ->map(fn(Item $item): Collection => $item->getBreweries()->reverse())
                ->collapse(),
        ];
    }
}