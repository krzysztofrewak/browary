<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class GeneralData implements JsonSerializable
{
    protected int $breweries;
    protected int $countries;
    protected ?Extremes $extremes = null;

    public function setCounters(int $breweries, int $countries): void
    {
        $this->breweries = $breweries;
        $this->countries = $countries;
    }

    public function setExtremes(Extremes $extremes): void
    {
        $this->extremes = $extremes;
    }

    public function jsonSerialize(): array
    {
        return [
            "counters" => [
                "breweries" => $this->breweries,
                "countries" => $this->countries,
            ],
            "extremes" => $this->extremes,
        ];
    }
}
