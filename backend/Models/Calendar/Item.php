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
    protected string $label;
    protected string $slug;
    protected Collection $breweries;
    protected ?Extremes $extremes;

    public function __construct(string $label, string $slug)
    {
        $this->label = $label;
        $this->slug = $slug;
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

    public function jsonSerialize(): array
    {
        return [
            "slug" => $this->slug,
            "label" => $this->label,
            "value" => $this->getValue(),
        ];
    }
}
