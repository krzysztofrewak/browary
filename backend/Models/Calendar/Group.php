<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\Boundable;
use Brewmap\Interfaces\HavingAll;
use Brewmap\Interfaces\Sluggable;
use Brewmap\Models\Extremes;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Group implements JsonSerializable, Sluggable, HavingAll, Boundable
{
    private string $label;
    private Collection $items;
    private ?Extremes $extremes;

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

    public function setExtremes(Extremes $extremes): Boundable
    {
        $this->extremes = $extremes;
        return $this;
    }

    public function getExtremes(): ?Extremes
    {
        return $this->extremes;
    }

    public function getBreweries(): Collection
    {
        return $this->getAll()->map(fn(Item $item): Collection => $item->getBreweries()->reverse())->collapse();
    }

    public function jsonSerialize(): array
    {
        return [
            "label" => $this->label,
            "items" => $this->items,
        ];
    }
}