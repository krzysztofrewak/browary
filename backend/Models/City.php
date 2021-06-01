<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class City implements JsonSerializable, Sluggable
{
    protected string $name;
    protected string $slug;
    protected Collection $breweries;
    protected ?Extremes $extremes = null;

    public function __construct(string $name)
    {
        $this->name = $name;
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

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "breweriesCount" => $this->getBreweries()->count(),
        ];
    }
}
