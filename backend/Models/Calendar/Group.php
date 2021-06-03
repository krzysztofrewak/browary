<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\Boundable;
use Brewmap\Interfaces\HavingAll;
use Brewmap\Interfaces\Sluggable;
use Brewmap\Models\Brewery;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;
use JsonSerializable;

class Group implements JsonSerializable, Sluggable, HavingAll, Boundable
{
    protected string $label;
    protected Collection $items;
    protected ?Extremes $extremes;

    public function __construct(string $label)
    {
        $this->label = $label;
        $this->items = new Collection();
    }

    public function addItem(string $label, string $slug): Item
    {
        $item = new Item($label, $slug);
        $this->items->add($item);
        return $item;
    }

    public function getSlug(): string
    {
        return $this->label;
    }

    public function findMaxValue(): int
    {
        $max = 0;
        foreach ($this->items as $item) {
            $value = $item->getValue();
            if ($value > $max) {
                $max = $value;
            }
        }

        return $max;
    }

    public function getExtremes(): ?Extremes
    {
        return $this->extremes;
    }

    public function setExtremes(Extremes $extremes): static
    {
        $this->extremes = $extremes;
        return $this;
    }

    public function getBreweries(): Collection
    {
        return $this->getAll()->map(fn(Item $item): Collection => $item->getBreweries()->reverse())->collapse();
    }

    public function getBreweriesCount(): int
    {
        return $this->getBreweries()->count();
    }

    public function getCountriesCount(): int
    {
        return $this->getBreweries()->groupBy(fn(Brewery $brewery): string => $brewery->getCountry()->getSlug())->count(
        );
    }

    public function getTripsCount(): int
    {
        return $this->getBreweries()->groupBy(fn(Brewery $brewery): string => $brewery->getTrip()->getSlug())->count();
    }

    public function getCitiesCount(): int
    {
        return $this->getBreweries()->groupBy(fn(Brewery $brewery): string => $brewery->getCity())->count();
    }

    public function getAll(): Collection
    {
        return $this->items;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->label,
            "items" => $this->items,
            "stats" => [
                "breweries" => $this->getBreweriesCount(),
                "countries" => $this->getCountriesCount(),
                "trips" => $this->getTripsCount(),
                "cities" => $this->getCitiesCount(),
            ],
        ];
    }
}
