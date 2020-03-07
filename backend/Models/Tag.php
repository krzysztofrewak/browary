<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

final class Tag implements JsonSerializable, Sluggable
{
    private string $name;
    private string $slug;
    /** @var Collection|Brewery[] */
    private Collection $breweries;
    private ?Extremes $extremes = null;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->slug = self::slug($this->name);
        $this->breweries = new Collection();
    }

    public static function slug(string $name): string
    {
        return Str::slug($name);
    }

    public function addBrewery(Brewery $brewery): self
    {
        $this->breweries->add($brewery);
        return $this;
    }

    public function setExtremes(Extremes $extremes): self
    {
        $this->extremes = $extremes;
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

    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getExtremes(): Extremes
    {
        return $this->extremes;
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