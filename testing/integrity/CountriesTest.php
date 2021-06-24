<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class CountriesTest extends TestCase
{
    public function testIfThereIsCountriesJsonFile(): void
    {
        $this->assertFileExists($this->getCountriesFilePath());
    }

    public function testIfThereAreCountriesInJsonFile(): void
    {
        $content = $this->getCountriesData();

        $this->assertIsArray($content);
        $this->assertArrayHasKey("countries", $content);

        foreach ($content["countries"] as $country) {
            $this->assertArrayHasKey("symbol", $country);
            $this->assertArrayHasKey("name", $country);
            $this->assertArrayHasKey("original", $country);
            $this->assertCount(3, $country);
        }
    }

    public function testIfSymbolsAreUnique(): void
    {
        $content = $this->getCountriesData();

        $symbols = [];
        foreach ($content["countries"] as $country) {
            $symbols[$country["symbol"]] = $country["symbol"];
        }

        $this->assertSameSize(
            expected: $content["countries"],
            actual: $symbols,
            message: "There's a different number of symbols and countries; possible non-unique symbol was used."
        );
    }

    protected function getCountriesFilePath(): string
    {
        return __DIR__ . "/../../resources/countries.json";
    }

    protected function getCountriesData(): array
    {
        $filename = $this->getCountriesFilePath();
        $content = file_get_contents($filename);
        return json_decode($content, true);
    }
}
