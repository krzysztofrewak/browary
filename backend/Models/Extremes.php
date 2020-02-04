<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

class Extremes implements JsonSerializable
{
    private string $north;
    private string $east;
    private string $south;
    private string $west;

    public function set(string $north, string $east, string $south, string $west): self
    {
        $this->north = $north;
        $this->east = $east;
        $this->south = $south;
        $this->west = $west;

        return $this;
    }

    public function setNorth(string $north): self
    {
        $this->north = $north;
        return $this;
    }

    public function setEast(string $east): self
    {
        $this->east = $east;
        return $this;
    }

    public function setSouth(string $south): self
    {
        $this->south = $south;
        return $this;
    }

    public function setWest(string $west): self
    {
        $this->west = $west;
        return $this;
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
}