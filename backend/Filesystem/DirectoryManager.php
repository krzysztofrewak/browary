<?php

declare(strict_types=1);

namespace Brewmap\Filesystem;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class DirectoryManager
{
    public function __construct(
        protected string $basePath,
    ) {}

    public function create(string $directory): void
    {
        $directory = $this->basePath . "/public/api/{$directory}";

        if (!file_exists($directory)) {
            mkdir($directory, 0777, true);
        }
    }

    public function purge(): void
    {
        $directory = $this->basePath . "/public/api/";

        if (file_exists($directory)) {
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($directory, RecursiveDirectoryIterator::SKIP_DOTS),
                RecursiveIteratorIterator::CHILD_FIRST,
            );

            foreach ($files as $file) {
                $action = $file->isDir() ? "rmdir" : "unlink";
                $action($file->getRealPath());
            }

            rmdir($directory);
        }
    }
}
