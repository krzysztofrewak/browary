<?php

declare(strict_types=1);

namespace Brewmap\Mapbox;

use Brewmap\Collections\Countries;
use Brewmap\Models\Country;
use Brewmap\Models\Extremes;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class CountryBoundsService
{
    /**
     * @throws GuzzleException
     */
    public static function setBounds(Countries $countries): void
    {
        $api = new Client();
        $token = $_ENV["VUE_APP_MAPBOX_TOKEN"] ?? getenv("VUE_APP_MAPBOX_TOKEN");

        if (empty($token)) {
            return;
        }

        /** @var Country $country */
        foreach ($countries->getAll() as $country) {
            $name = $country->getName();
            $response = $api->get(
                "https://api.mapbox.com/geocoding/v5/mapbox.places/{$name}.json?access_token={$token}&types=country",
            );
            $bounds = json_decode($response->getBody()->getContents(), true)["features"][0]["bbox"];

            $extremes = new Extremes(
                north: (string)$bounds[3],
                east: (string)$bounds[2],
                south: (string)$bounds[1],
                west: (string)$bounds[0],
            );

            $country->setExtremes($extremes);
        }
    }
}
