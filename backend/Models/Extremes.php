<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class Extremes implements JsonSerializable
{
    protected string $north;
    protected string $east;
    protected string $south;
    protected string $west;

    public function __construct(string $north, string $east, string $south, string $west)
    {
        $this->north = $this->processCoordinate($north);
        $this->east = $this->processCoordinate($east);
        $this->south = $this->processCoordinate($south);
        $this->west = $this->processCoordinate($west);
    }

    public function jsonSerialize(): array
    {
        return [
            "north" => $this->north,
            "east" => $this->east,
            "south" => $this->south,
            "west" => $this->west,
        ];
    }

    protected function processCoordinate(string $coordinate): string
    {
        if (empty($coordinate)) {
            return $coordinate;
        }

        $parts = explode(".", $coordinate);
        $parts[1] = str_pad(
            string: $parts[1],
            length: 6,
            pad_string: "0",
        );

        return $parts[0] . "." . $parts[1];
    }
}
