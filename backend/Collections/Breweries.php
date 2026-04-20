<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Brewery;
use Brewmap\Services\BreweriesUniqueSlugService;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use JsonSerializable;

class Breweries implements JsonSerializable, HavingAll
{
    protected Collection $breweries;
    protected BreweriesUniqueSlugService $slugService;

    public function __construct()
    {
        $this->breweries = new Collection();
        $this->slugService = new BreweriesUniqueSlugService();
    }

    public function addBrewery(Brewery $brewery): static
    {
        $this->slugService->process($brewery);
        $this->breweries->put($brewery->getSlug(), $brewery);

        return $this;
    }

    /**
     * @return Collection<Brewery>
     */
    public function getAll(): Collection
    {
        return $this->breweries;
    }

    public function getMostBreweriesInOneDay(): array
    {
        $groups = $this->getAll()
            ->groupBy(fn(Brewery $brewery) => $brewery->getFullDate())
            ->map->count()->sortDesc();

        return [$groups->first(), $groups->keys()->first()];
    }

    public function getLongestStreak(): array
    {
        $dates = $this->getAll()
            ->groupBy(fn(Brewery $brewery) => $brewery->getDate()->toDateString())
            ->keys()
            ->map(fn(string $date): Carbon => Carbon::createFromFormat('Y-m-d', $date))
            ->sort()
            ->values();

        $longestStreak = 0;
        $currentStreak = 0;
        $previousDate = null;

        $longestStreakStartDate = null;
        $currentStreakStartDate = null;

        foreach ($dates as $date) {
            if ($previousDate === null) {
                $currentStreak = 1;
                $currentStreakStartDate = $date->copy();
            } elseif ($previousDate->copy()->addDay()->isSameDay($date)) {
                $currentStreak++;
            } else {
                $currentStreak = 1;
                $currentStreakStartDate = $date->copy();
            }

            if ($currentStreak > $longestStreak) {
                $longestStreak = $currentStreak;
                $longestStreakStartDate = $currentStreakStartDate->copy();
            }

            $previousDate = $date;
        }

        return [$longestStreak, $longestStreakStartDate?->locale('pl')->translatedFormat('F Y')];
    }

    public function jsonSerialize(): Collection
    {
        return $this->breweries;
    }
}
