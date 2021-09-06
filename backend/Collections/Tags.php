<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Tag;
use Illuminate\Support\Collection;
use JsonSerializable;

class Tags implements JsonSerializable, HavingAll
{
    protected Collection $tags;

    public function __construct()
    {
        $this->tags = new Collection();
    }

    public function firstOrCreate(string $name): Tag
    {
        $alreadyExisting = $this->tags->get(Tag::slug($name));
        if ($alreadyExisting) {
            return $alreadyExisting;
        }

        $tag = new Tag($name);
        $this->tags->put($tag->getSlug(), $tag);

        return $tag;
    }

    public function getAll(): Collection
    {
        return $this->tags->sortBy("name");
    }

    public function jsonSerialize(): array
    {
        return $this->tags
            ->sort(
                fn(Tag $a, Tag $b): int => $a->getBreweriesCount() === $b->getBreweriesCount()
                    ? $a->getName() <=> $b->getName()
                    : $b->getBreweriesCount() <=> $a->getBreweriesCount(),
            )
            ->filter(fn(Tag $city): bool => $city->getBreweries()->count() > 1)
            ->toArray();
    }
}
