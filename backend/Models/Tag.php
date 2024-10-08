<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class Tag implements JsonSerializable, Sluggable
{
    protected string $slug;

    /** @var Collection<Brewery> */
    protected Collection $breweries;

    protected ?Extremes $extremes = null;

    public function __construct(
        protected string $name,
    ) {
        $this->slug = static::slug($this->name);
        $this->breweries = new Collection();
    }

    public static function slug(string $name): string
    {
        return Str::slug($name);
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

    public function getSlug(): string
    {
        return $this->slug;
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

    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getBreweriesCount(): int
    {
        return $this->breweries->count();
    }

    public function getCountriesCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getCountry()->getSlug())->count();
    }

    public function getTripsCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getTrip()->getSlug())->count();
    }

    public function getCitiesCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getCity()->getSlug())->count();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "breweries" => $this->getBreweries()->count(),
        ];
    }
}
