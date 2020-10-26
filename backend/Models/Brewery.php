<?php

declare(strict_types=1);

namespace Brewmap\Models;

use Brewmap\Interfaces\Sluggable;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JsonSerializable;

final class Brewery implements JsonSerializable, Sluggable
{
    private int $id;
    private string $name;
    private string $slug;
    private Location $location;
    private Carbon $date;
    private Trip $trip;
    private string $note;
    /** @var Collection|Tag[] */
    private Collection $tags;

    public function __construct(string $name, Location $location, Carbon $date, Trip $trip, string $note = "")
    {
        $this->name = $name;
        $this->slug = Str::slug($name);
        $this->location = $location;
        $this->date = $date;
        $this->trip = $trip;
        $this->note = $note;
        $this->tags = new Collection();
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function updateSlug(int $index): void
    {
        $this->slug .= "-${index}";
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

    public function getCity(): string
    {
        return $this->location->getCity();
    }

    public function getCoordinates(): Coordinates
    {
        return $this->location->getCoordinates();
    }

    public function getLabel(): string
    {
        return "{$this->name}, {$this->location->getCity()}";
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

    /** @return Tag[]|Collection */
    public function getTags(): Collection
    {
        return $this->tags->sort(fn (Tag $a, Tag $b): int => $a->getName() <=> $b->getName());
    }

    public function jsonSerialize(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "slug" => $this->slug,
            "location" => $this->location,
            "date" => $this->getMonthYearDate(),
        ];
    }

    public function getMonthYearDate(): string
    {
        return "{$this->date->locale("pl")->monthName} {$this->date->locale("pl")->year}";
    }
}
