<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Models\Brewery;
use JsonSerializable;

final class GeoJson implements JsonSerializable
{
    private const TYPE = "FeatureCollection";

    private Breweries $breweries;

    public function __construct(Breweries $breweries)
    {
        $this->breweries = $breweries;
    }

    public function jsonSerialize(): array
    {
        return [
            "type" => self::TYPE,
            "features" => $this->breweries->getAll()
                ->values()
                ->map(fn(Brewery $brewery): array => $this->mapBrewery($brewery)),
        ];
    }

    private function mapBrewery(Brewery $brewery): array
    {
        return [
            "type" => "Feature",
            "geometry" => [
                "type" => "Point",
                "coordinates" => $brewery->getCoordinates(),
            ],
            "properties" => [
                "label" => $brewery->getLabel(),
                "slug" => $brewery->getSlug(),
                "country" => $brewery->getCountry()->getSlug(),
                "month" => $brewery->getDate()->format("m")
            ],
        ];
    }
}
