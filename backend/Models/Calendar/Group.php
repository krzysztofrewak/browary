<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Interfaces\Sluggable;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Group implements JsonSerializable, Sluggable, HavingAll
{
    private string $label;
    private Collection $items;

    public function __construct(string $label)
    {
        $this->label = $label;
        $this->items = new Collection();
    }

    public function addItem(string $label, string $slug)
    {
        $item = new Item($label, $slug);
        $this->items->add($item);
        return $item;
    }

    /** @return Collection|Item[] */
    public function getAll(): Collection
    {
        return $this->items;
    }

    public function getSlug(): string
    {
        return $this->label;
    }

    public function findMaxValue(): int
    {
        $max = 0;
        foreach ($this->items as $item) {
            $value = $item->getValue();
            if ($value > $max) {
                $max = $value;
            }
        }

        return $max;
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->label,
            "items" => $this->items,
        ];
    }
}