<?php

declare(strict_types=1);

namespace Brewmap\Models;

use JsonSerializable;

final class Statistics implements JsonSerializable
{
    public function jsonSerialize(): array
    {
        return [];
    }
}