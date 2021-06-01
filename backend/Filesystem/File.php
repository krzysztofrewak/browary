<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use JsonSerializable;

class File
{
    public static function save(JsonSerializable $resource, string $filename): void
    {
        file_put_contents(
            filename: __DIR__ . "/../../public/api/${filename}",
            data: json_encode($resource, JSON_UNESCAPED_UNICODE),
        );
    }
}
