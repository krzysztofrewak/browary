<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;
use Brewmap\Models\Brewery;
use Brewmap\Models\Calendar\Calendar;
use Brewmap\Models\Calendar\Group;
use Brewmap\Models\Calendar\Item;
use Carbon\Carbon;

final class CalendarBuilder
{
    public static function build(Breweries $breweries): Calendar
    {
        $calendar = new Calendar();

        /** @var Group $year */
        /** @var Carbon $iterator */
        $iterator = $breweries->getAll()->last()->getDate()->copy()->startOfYear();
        $previousYear = null;

        while (true) {
            if ($previousYear !== $iterator->year) {
                $year = $calendar->addGroup($iterator->format("Y"));
                $previousYear = $iterator->year;
            }

            $label = "{$iterator->locale("pl")->monthName} {$iterator->year}";
            $item = $year->addItem($label, $iterator->format("m"));
            $monthBreweries = $breweries->getAll()
                ->filter(fn(Brewery $brewery): bool => self::isSameMonth($brewery, $iterator))
                ->each(fn(Brewery $brewery): Item => $item->addBrewery($brewery));

            $iterator->addMonth();

            if ($iterator->isNextYear() && $iterator->month === 1) {
                break;
            }
        }

        return $calendar;
    }

    private static function isSameMonth(Brewery $brewery, Carbon $iterator): bool
    {
        return $brewery->getDate()->year === $iterator->year && $brewery->getDate()->month === $iterator->month;
    }
}