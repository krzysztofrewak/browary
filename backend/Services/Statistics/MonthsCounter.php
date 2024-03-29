<?php

declare(strict_types=1);

namespace Brewmap\Services\Statistics;

use Brewmap\Models\Brewery;
use Brewmap\Services\RomanMonthTranslator;
use Illuminate\Support\Collection;

class MonthsCounter
{
    public static function count(Collection $breweries): array
    {
        $weekdays = RomanMonthTranslator::ROMAN;
        $values = $breweries->countBy(fn(Brewery $brewery): int => $brewery->getDate()->month)
            ->map(
                fn(int $value, int $key): array => [
                    "label" => $weekdays[$key - 1],
                    "value" => $value,
                ],
            )
            ->toArray();

        return array_map(
            callback: fn(string $day): array => $values[$day] ?? [
                "label" => $day,
                "value" => 0,
            ],
            array: range(1, 12),
        );
    }
}
