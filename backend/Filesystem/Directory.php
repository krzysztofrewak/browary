<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

final class Directory
{
    public static function create(string $directory): void
    {
        $directory = __DIR__ . "/../../public/api/${directory}";

        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
    }
}
