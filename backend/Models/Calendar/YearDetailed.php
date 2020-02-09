<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

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
            "slug" => $this->group->getSlug(),
            "extremes" => $this->group->getExtremes(),
            "breweries" => $this->group->getBreweries(),
        ];
    }
}