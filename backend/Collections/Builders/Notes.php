<?php

declare(strict_types=1);

namespace Brewmap\Collections\Builders;

use Brewmap\Collections\Breweries;
use Brewmap\Collections\Notes as NotesCollection;
use Brewmap\Models\Brewery;
use Brewmap\Models\Note;

final class Notes
{
    public static function buildFromBreweries(Breweries $breweries): NotesCollection
    {
        $notes = new NotesCollection();

        $breweries->getAll()
            ->filter(fn (Brewery $brewery): bool => !empty($brewery->getNote()))
            ->each(fn (Brewery $brewery): NotesCollection => $notes->addNote(new Note($brewery)));

        return $notes;
    }
}
