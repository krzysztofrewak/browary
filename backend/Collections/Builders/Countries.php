<?php

declare(strict_types=1);

namespace Brewmap\Collections\Builders;

use Brewmap\Collections\Countries as CountriesCollection;
use Brewmap\Models\Country;

class Countries
{
    public static function buildFromJson(string $jsonFile): CountriesCollection
    {
        $countries = new CountriesCollection();

        $data = json_decode($jsonFile, true);
        foreach ($data["countries"] as $countryData) {
            $countries->addCountry(new Country($countryData["name"], $countryData["original"], $countryData["symbol"], $countryData["tags"]));
        }

        return $countries;
    }
}
