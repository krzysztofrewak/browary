<?php

declare(strict_types=1);

namespace Brewmap\Collections;

use Brewmap\Models\Brewery;
use JsonSerializable;

class GeoJson implements JsonSerializable
{
    protected const TYPE = "FeatureCollection";

    public function __construct(
        protected Breweries $breweries,
    ) {}

    public function jsonSerialize(): array
    {
        return [
            "type" => static::TYPE,
            "features" => $this->breweries->getAll()
                ->values()
                ->map(fn(Brewery $brewery): array => $this->mapBrewery($brewery)),
        ];
    }

    protected function mapBrewery(Brewery $brewery): array
    {
        $map = [
            "type" => "Feature",
            "geometry" => [
                "type" => "Point",
                "coordinates" => $brewery->getCoordinates(),
            ],
            "properties" => [
                "label" => $brewery->getLabel(),
                "slug" => $brewery->getSlug(),
                "country" => $brewery->getCountry()->getSlug(),
                "symbol" => $brewery->getCountry()->getSymbol(),
                "year" => $brewery->getDate()->format("Y"),
                "month" => $brewery->getDate()->format("Y-m"),
                "trip" => $brewery->getTrip()->getSlug(),
            ],
        ];

        foreach ($brewery->getTags() as $tag) {
            $map["properties"]["tag_" . $tag->getSlug()] = true;
        }

        return $map;
    }
}
