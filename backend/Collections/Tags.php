<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Tag;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Tags implements JsonSerializable, HavingAll
{
    /** @var Collection|Tag[] */
    private Collection $tags;

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

    /**
     * @return Collection|Tag[]
     */
    public function getAll(): Collection
    {
        return $this->tags->sortBy("name");
    }

    public function jsonSerialize(): array
    {
        return $this->tags->sort(fn(Tag $a, Tag $b): int => $a->getName() <=> $b->getName())->toArray();
    }
}