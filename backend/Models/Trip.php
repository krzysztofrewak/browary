<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Boundable;
use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class Trip implements JsonSerializable, Sluggable, Boundable
{
    protected string $slug;
    protected Collection $breweries;
    protected Collection $countries;
    protected Collection $tags;
    protected ?Extremes $extremes = null;

    public function __construct(
        protected string $name,
        array $tags,
    ) {
        $this->slug = Str::slug($this->name);
        $this->breweries = new Collection();
        $this->countries = new Collection();
        $this->tags = new Collection($tags);
    }

    public static function buildFromJson(string $jsonFile): static
    {
        $data = json_decode($jsonFile, true);

        return new static($data["name"], $data["tags"] ?? []);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function addBrewery(Brewery $brewery): static
    {
        $this->breweries->put($brewery->getSlug(), $brewery);
        $this->countries->prepend($brewery->getCountry(), $brewery->getCountry()->getSlug());

        return $this;
    }

    /**
     * @return Collection<Brewery>
     */
    public function getBreweries(): Collection
    {
        return $this->breweries;
    }

    public function getBreweriesCount(): int
    {
        return $this->breweries->count();
    }

    public function getCountries(): Collection
    {
        return $this->countries;
    }

    public function getCountriesCount(): int
    {
        return $this->countries->count();
    }

    public function getCitiesCount(): int
    {
        return $this->breweries->groupBy(fn(Brewery $brewery): string => $brewery->getCity()->getSlug())->count();
    }

    public function getTags()
    {
        return $this->tags;
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

    public function jsonSerialize(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
            "date" => (int)$this->breweries->first()->getDate()->format("Ymd"),
            "breweries" => $this->breweries->count(),
            "countries" => $this->countries->toArray(),
        ];
    }
}
