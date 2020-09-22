<?php

declare(strict_types=1);

namespace Brewmap\Mapbox;

use Brewmap\Collections\Countries;
use Brewmap\Models\Country;
use Brewmap\Models\Extremes;
use GuzzleHttp\Client;

final class CountryBoundsService
{
    public static function setBounds(Countries $countries): void
    {
        $api = new Client();
        $token = getenv("VUE_APP_MAPBOX_TOKEN");

        /** @var Country $country */
        foreach ($countries->getAll() as $country) {
            $name = $country->getName();
            $response = $api->get(
                "https://api.mapbox.com/geocoding/v5/mapbox.places/$name.json?access_token=$token&types=country"
            );
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