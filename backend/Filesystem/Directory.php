<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use Illuminate\Contracts\Filesystem\Filesystem;

final class Directory
{
    public static function create(string $directory): void
    {
        $directory = "../public/api/$directory";

        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
    }
}