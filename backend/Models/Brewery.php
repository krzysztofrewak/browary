<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

class Brewery implements JsonSerializable, Sluggable
{
    protected int $id;
    protected string $slug;
    protected Collection $tags;

    public function __construct(
        protected string $name,
        protected ?string $altName,
        protected Location $location,
        protected Carbon $date,
        protected Trip $trip,
        protected string $note = "",
    ) {
        $this->slug = Str::slug(title: $name, language: $location->getCountry()->getSymbol());
        $this->tags = new Collection();
    }

    public function getId(): string
    {
        return (string)$this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getAltName(): ?string
    {
        return $this->altName;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function updateSlug(int $index): void
    {
        $this->slug .= "-{$index}";
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function addTag(Tag $tag): void
    {
        $this->tags->put($tag->getSlug(), $tag);
    }

    public function getCountry(): Country
    {
        return $this->location->getCountry();
    }

    public function getCity(): City
    {
        return $this->location->getCity();
    }

    public function getCoordinates(): Coordinates
    {
        return $this->location->getCoordinates();
    }

    public function getLabel(): string
    {
        $name = $this->name;

        if ($this->altName) {
            $name = "$name | {$this->altName}";
        }

        return "$name, {$this->location->getCity()->getName()}";
    }

    public function getDate(): Carbon
    {
        return $this->date;
    }

    public function getFullDate(): string
    {
        return $this->date->locale("pl")->translatedFormat("j F Y");
    }

    public function getTrip(): Trip
    {
        return $this->trip;
    }

    public function getNote(): string
    {
        return $this->note;
    }

    public function getLocation(): Location
    {
        return $this->location;
    }

    public function getTags(): Collection
    {
        return $this->tags->sort(fn(Tag $a, Tag $b): int => strtolower($a->getName()) <=> strtolower($b->getName()));
    }

    public function getMonthYearDate(): string
    {
        return "{$this->date->locale("pl")->monthName} {$this->date->locale("pl")->year}";
    }

    public function jsonSerialize(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "altName" => $this->altName ?? "",
            "slug" => $this->slug,
            "location" => $this->location,
            "date" => $this->getMonthYearDate(),
        ];
    }
}
