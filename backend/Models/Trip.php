<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

final class Trip implements JsonSerializable, Sluggable
{
    private string $name;
    private string $slug;
    private Collection $breweries;
    private Collection $countries;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->slug = Str::slug($this->name);
        $this->breweries = new Collection();
        $this->countries = new Collection();
    }

    public static function buildFromJson(string $jsonFile): self
    {
        $data = json_decode($jsonFile, true);
        return new self($data["name"]);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function addBrewery(Brewery $brewery): self
    {
        $this->breweries->put($brewery->getSlug(), $brewery);
        $this->countries->prepend($brewery->getCountry(), $brewery->getCountry()->getSlug());
        return $this;
    }

    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getCountries(): Collection
    {
        return $this->countries;
    }

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "breweries" => $this->breweries->count(),
            "countries" => $this->countries->toArray(),
        ];
    }
}