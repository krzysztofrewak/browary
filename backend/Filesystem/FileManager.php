<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use JsonSerializable;

class FileManager
{
    public function __construct(
        protected string $basePath,
    ) {}

    public function save(JsonSerializable $resource, string $filename): void
    {
        file_put_contents(
            filename: $this->basePath . "/public/api/${filename}",
            data: json_encode($resource, JSON_UNESCAPED_UNICODE),
        );
    }
}
