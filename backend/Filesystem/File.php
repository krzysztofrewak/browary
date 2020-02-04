<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use JsonSerializable;

final class File
{
    public static function save(JsonSerializable $resource, string $filename): void
    {
        file_put_contents("../public/api/$filename", json_encode($resource, JSON_UNESCAPED_UNICODE));
    }
}