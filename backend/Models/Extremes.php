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

    public function set(string $north, string $east, string $south, string $west): static
    {
        $this->north = $north;
        $this->east = $east;
        $this->south = $south;
        $this->west = $west;

        return $this;
    }

    public function setNorth(string $north): static
    {
        $this->north = $north;
        return $this;
    }

    public function setEast(string $east): static
    {
        $this->east = $east;
        return $this;
    }

    public function setSouth(string $south): static
    {
        $this->south = $south;
        return $this;
    }

    public function setWest(string $west): static
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
