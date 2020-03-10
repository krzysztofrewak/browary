<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

final class Statistics implements JsonSerializable
{
    private array $extremes;
    private array $weekdays;
    private array $months;

    public function setExtremes(array $extremes): self
    {
        $this->extremes = $extremes;
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

    public function setWeekdays(array $weekdays): self
    {
        $this->weekdays = $weekdays;
        return $this;
    }

    public function setMonths(array $months): self
    {
        $this->months = $months;
        return $this;
    }
}