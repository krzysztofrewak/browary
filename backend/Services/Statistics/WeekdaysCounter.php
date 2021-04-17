<?php

declare(strict_types=1);

namespace Brewmap\Services\Statistics;

use Brewmap\Models\Brewery;
use Illuminate\Support\Collection;

final class WeekdaysCounter
{
    public static function count(Collection $breweries): array
    {
        $weekdays = ["pn", "wt", "śr", "cz", "pt", "sb", "nd"];
        return $breweries->countBy(fn(Brewery $brewery): int => $brewery->getDate()->isoWeekday())
            ->map(fn(int $value, int $key): array => [
                "label" => $weekdays[$key - 1],
                "value" => $value,
            ])
            ->toArray();
    }
}
