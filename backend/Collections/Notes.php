<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Models\Note;
use Illuminate\Support\Collection;
use JsonSerializable;

class Notes implements JsonSerializable, HavingAll
{
    protected Collection $notes;

    public function __construct()
    {
        $this->notes = new Collection();
    }

    public function addNote(Note $note): static
    {
        $this->notes->add($note);

        return $this;
    }

    public function getAll(): Collection
    {
        return $this->notes;
    }

    public function jsonSerialize(): array
    {
        return $this->notes->toArray();
    }
}
