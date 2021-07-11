<?php

declare(strict_types=1);

namespace Brewmap\Mappings;

use Illuminate\Support\Collection;

class Cities
{
    public static function buildFromJson(string $jsonFile): array
    {
        $mappings = new Collection(json_decode($jsonFile, associative: true)["cities"]);

        return $mappings->mapWithKeys(
            fn(array $city): array => [
                $city["name"] => new Collection($city["mappings"]),
            ]
        )->map(
            fn(Collection $mappings): array => $mappings->mapWithKeys(
                fn(array $mapping): array => [
                    $mapping["mapping"] => $mapping["value"],
                ]
            )->toArray()
        )->toArray();
    }
}
