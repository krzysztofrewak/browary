<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class Statistics implements JsonSerializable
{
    protected array $extremes = [];
    protected array $weekdays = [];
    protected array $months = [];
    protected array $counters = [];
    protected array $records = [];

    public function setExtremes(array $extremes): static
    {
        $this->extremes = $extremes;

        return $this;
    }

    public function setWeekdays(array $weekdays): static
    {
        $this->weekdays = $weekdays;

        return $this;
    }

    public function setMonths(array $months): static
    {
        $this->months = $months;

        return $this;
    }

    public function setCounter(string $label, int $value): static
    {
        $this->counters[$label] = $value;

        return $this;
    }

    public function setRecord(string $label, int $counter, string $description): static
    {
        $this->records[$label] = [
            "counter" => $counter,
            "description" => $description,
        ];

        return $this;
    }

    public function jsonSerialize(): array
    {
        return [
            "extremes" => $this->extremes,
            "weekdays" => $this->weekdays,
            "months" => $this->months,
            "counters" => [
                "breweries" => $this->counters["breweries"] ?? 0,
                "countries" => $this->counters["countries"] ?? 0,
                "cities" => $this->counters["cities"] ?? 0,
                "trips" => $this->counters["trips"] ?? 0,
                "tags" => $this->counters["tags"] ?? 0,
            ],
            "records" => [
                "mostBreweriesInOneDay" => $this->records["mostBreweriesInOneDay"] ?? ["counter" => 0, "description" => ""],
                "longestStreak" => $this->records["longestStreak"] ?? ["counter" => 0, "description" => ""],
                "longestTrip" => $this->records["longestTrip"] ?? ["counter" => 0, "description" => ""],
            ],
        ];
    }
}
