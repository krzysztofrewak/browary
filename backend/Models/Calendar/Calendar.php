<?php

declare(strict_types=1);

namespace Brewmap\Models\Calendar;

use Brewmap\Interfaces\HavingAll;
use Illuminate\Support\Collection;
use JsonSerializable;

final class Calendar implements JsonSerializable, HavingAll
{
    /** @var Collection|Group[] */
    private Collection $groups;

    public function __construct()
    {
        $this->groups = new Collection();
    }

    public function addGroup(string $label): Group
    {
        $group = new Group($label);
        $this->groups->add($group);
        return $group;
    }

    /** @return Collection|Group[] */
    public function getAll(): Collection
    {
        return $this->groups;
    }

    public function jsonSerialize(): array
    {
        return [
            "maxValue" => $this->findMaxValue(),
            "groups" => $this->groups,
        ];
    }

    private function findMaxValue(): int
    {
        $max = 0;
        foreach ($this->groups as $group) {
            $value = $group->findMaxValue();
            if ($value > $max) {
                $max = $value;
            }
        }

        return $max;
    }
}
