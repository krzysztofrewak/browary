<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Interfaces\Sluggable;
use JsonSerializable;

class Files
{
    public static function save(HavingAll $resource, string $directory, string $mapper = ""): void
    {
        $all = $resource->getAll();
        $all->each(fn(Sluggable $item) => File::save(static::get($mapper, $item), static::filename($item, $directory)));
    }

    protected static function get(string $mapper, Sluggable $item): JsonSerializable
    {
        return $mapper ? new $mapper($item) : $item;
    }

    protected static function filename(Sluggable $item, string $directory): string
    {
        return "${directory}/{$item->getSlug()}.json";
    }
}
