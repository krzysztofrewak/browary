<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class Country implements JsonSerializable, Sluggable
{
    protected string $name;
    protected string $original;
    protected string $symbol;
    protected string $slug;
    protected Collection $breweries;
    protected ?Extremes $extremes = null;

    public function __construct(string $name, string $original, string $symbol)
    {
        $this->name = $name;
        $this->original = $original;
        $this->symbol = $symbol;
        $this->slug = Str::slug($this->name);
        $this->breweries = new Collection();
    }

    public function addBrewery(Brewery $brewery): static
    {
        $this->breweries->add($brewery);
        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getOriginalName(): string
    {
        return $this->original;
    }

    public function getSymbol(): string
    {
        return $this->symbol;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getExtremes(): Extremes
    {
        return $this->extremes;
    }

    public function setExtremes(Extremes $extremes): static
    {
        $this->extremes = $extremes;
        return $this;
    }

    public function getBreweriesCount(): int
    {
        return $this->breweries->count();
    }

    public function getTripsCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getTrip()->getSlug())->count();
    }

    public function getCitiesCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getCity())->count();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "symbol" => $this->symbol,
            "slug" => $this->slug,
            "breweriesCount" => $this->getBreweriesCount(),
        ];
    }
}
