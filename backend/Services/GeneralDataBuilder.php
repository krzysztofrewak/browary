<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Collections\Breweries;
use Brewmap\Collections\Countries;
use Brewmap\Models\GeneralData;

final class GeneralDataBuilder
{
    public static function build(Breweries $breweries, Countries $countries): GeneralData
    {
        $data = new GeneralData();
        $data->setCounters($breweries->getAll()->count(), $countries->getAll()->count());
        $data->setExtremes(ExtremesBuilder::build($breweries->getAll()));

        return $data;
    }
}
