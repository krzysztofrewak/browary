<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class Statistics implements JsonSerializable
{
    protected array $extremes;
    protected array $weekdays;
    protected array $months;

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

    public function jsonSerialize(): array
    {
        return [
            "extremes" => $this->extremes,
            "weekdays" => $this->weekdays,
            "months" => $this->months,
        ];
    }
}
