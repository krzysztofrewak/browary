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
    public static function setBounds(Countries $countries, string $rootPath): void
    {
        $api = new Client();
        $token = $_ENV["VUE_APP_MAPBOX_TOKEN"] ?? getenv("VUE_APP_MAPBOX_TOKEN");

        if (empty($token)) {
            return;
        }

        $hash = $countries->getHash();

        if (file_exists($rootPath . "/.countries.cache.json")) {
            $cache = file_get_contents($rootPath . "/.countries.cache.json");
            $cache = json_decode($cache, associative: true);

            if ($cache["hash"] === $hash) {
                /** @var Country $country */
                foreach ($countries->getAll() as $country) {
                    $extremes = new Extremes(...$cache["extremes"][$country->getSymbol()]);
                    $country->setExtremes($extremes);
                }

                return;
            }
        }

        $cache = [
            "hash" => $hash,
            "extremes" => [],
        ];

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
            $cache["extremes"][$country->getSymbol()] = $extremes;
        }

        file_put_contents($rootPath . "/.countries.cache.json", json_encode($cache, JSON_PRETTY_PRINT));
    }
}
