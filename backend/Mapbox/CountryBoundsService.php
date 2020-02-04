<?php

declare(strict_types=1);

namespace Brewmap\Mapbox;

use Brewmap\Models\Country;
use Brewmap\Models\Extremes;
use GuzzleHttp\Client;
use Illuminate\Support\Collection;

final class CountryBoundsService
{
    private Client $api;

    public function __construct()
    {
        $this->api = new Client();
    }

    public function findBounds(Collection $countries): void
    {
        $token = getenv("VUE_APP_MAPBOX_TOKEN");

        /** @var Country $country */
        foreach ($countries as $country) {
            $name = $country->getName();
            $response = $this->api->get("https://api.mapbox.com/geocoding/v5/mapbox.places/$name.json?access_token=$token&types=country");
            $bounds = json_decode($response->getBody()->getContents(), true)["features"][0]["bbox"];

            $extremes = new Extremes();
            $extremes->setNorth((string)$bounds[3]);
            $extremes->setEast((string)$bounds[2]);
            $extremes->setSouth((string)$bounds[1]);
            $extremes->setWest((string)$bounds[0]);
            $country->setExtremes($extremes);
        }
    }
}