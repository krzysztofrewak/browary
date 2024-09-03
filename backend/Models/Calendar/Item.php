<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\Boundable;
use Brewmap\Interfaces\Sluggable;
use Brewmap\Models\Brewery;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;

class Item implements Sluggable, Boundable
{
    protected Collection $breweries;
    protected ?Extremes $extremes;

    public function __construct(
        protected string $label,
        protected string $slug,
    ) {
        $this->breweries = new Collection();
    }

    public function addBrewery(Brewery $brewery): static
    {
        $this->breweries->add($brewery);

        return $this;
    }

    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function getLabel(): string
    {
        return $this->label;
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

    public function getValue(): int
    {
        return $this->breweries->count();
    }

    public function getBreweriesCount(): int
    {
        return $this->getBreweries()->count();
    }

    public function getCountriesCount(): int
    {
        return $this->getBreweries()
            ->groupBy(fn(Brewery $brewery): string => $brewery->getCountry()->getSlug())
            ->count();
    }

    public function getTripsCount(): int
    {
        return $this->getBreweries()
            ->groupBy(fn(Brewery $brewery): string => $brewery->getTrip()->getSlug())
            ->count();
    }

    public function getCitiesCount(): int
    {
        return $this->getBreweries()
            ->groupBy(fn(Brewery $brewery): string => $brewery->getCity()->getSlug())
            ->count();
    }

    public function jsonSerialize(): array
    {
        return [
            "slug" => $this->slug,
            "label" => $this->label,
            "value" => $this->getValue(),
        ];
    }
}
