<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use Brewmap\Interfaces\HavingAll;
use Brewmap\Interfaces\Sluggable;
use JsonSerializable;

class FilesManager
{
    public function __construct(
        protected FileManager $fileManager,
    ) {}

    public function save(HavingAll $resource, string $directory, string $mapper = ""): void
    {
        $resource->getAll()->each(
            fn(Sluggable $item) => $this->fileManager->save(
                resource: $this->get($mapper, $item),
                filename: $this->filename($item, $directory),
            ),
        );
    }

    protected function get(string $mapper, Sluggable $item): JsonSerializable
    {
        return $mapper ? new $mapper($item) : $item;
    }

    protected function filename(Sluggable $item, string $directory): string
    {
        return "{$directory}/{$item->getSlug()}.json";
    }
}
