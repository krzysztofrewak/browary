<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class Directory
{
    public static function create(string $directory): void
    {
        $directory = __DIR__ . "/../../public/api/${directory}";

        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
    }

    public static function purge(): void
    {
        $directory = __DIR__ . "/../../public/api/";

        if (file_exists($directory)) {
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($directory, RecursiveDirectoryIterator::SKIP_DOTS),
                RecursiveIteratorIterator::CHILD_FIRST
            );

            foreach ($files as $file) {
                $todo = ($file->isDir() ? "rmdir" : "unlink");
                $todo($file->getRealPath());
            }

            rmdir($directory);
        }
    }
}
