<?php

declare(strict_types=1);

namespace Brewmap\Services;

class RomanMonthTranslator
{
    public const ROMAN = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
    ];

    public static function get(int $month): string
    {
        if ($month < 1 || $month > 12) {
            return "";
        }

        return static::ROMAN[$month - 1];
    }
}
