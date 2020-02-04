<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\Sluggable;
use Brewmap\Models\Brewery;
use Illuminate\Support\Collection;

final class Item implements Sluggable
{
    private string $label;
    private string $slug;
    private Collection $breweries;

    public function __construct(string $label, string $slug)
    {
        $this->label = $label;
        $this->slug = $slug;
        $this->breweries = new Collection();
    }

    public function addBrewery(Brewery $brewery): self
    {
        $this->breweries->add($brewery);
        return $this;
    }

    public function getValue(): int
    {
        return $this->breweries->count();
    }

    /** @return Collection|Brewery[] */
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

    public function jsonSerialize(): array
    {
        return [
            "slug" => $this->slug,
            "label" => $this->label,
            "value" => $this->getValue(),
        ];
    }
}