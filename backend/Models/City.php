<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Brewmap\Models\Mappers\SimplifiedCountry;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class City implements JsonSerializable, Sluggable
{
    protected string $name;
    protected string $slug;
    protected Country $country;
    protected Collection $breweries;
    protected ?Extremes $extremes = null;

    public function __construct(string $name, Country $country)
    {
        $this->name = $name;
        $this->slug = Str::slug($this->name);
        $this->country = $country;
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

    public function getTripsCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getTrip()->getSlug())->count();
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "country" => new SimplifiedCountry($this->country),
            "breweries" => $this->getBreweries()->count(),
            "trips" => $this->getTripsCount(),
        ];
    }
}
