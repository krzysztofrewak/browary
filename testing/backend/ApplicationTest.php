<?php

declare(strict_types=1);

use Brewmap\Application\Application;
use Dotenv\Dotenv;
use PHPUnit\Framework\TestCase;

class ApplicationTest extends TestCase
{
    public function testGeneralApplicationBehaviour(): void
    {
        $root = __DIR__ . "/fixtures/";
        $dotenv = Dotenv::createImmutable($root);

        $application = new Application($root, $dotenv);
        $application->build();

        $statistics = $this->getApiFileContent("statistics.json");
        $this->assertSame(5, $statistics["counters"]["breweries"]);
        $this->assertSame(2, $statistics["counters"]["countries"]);
        $this->assertSame(4, $statistics["counters"]["cities"]);
        $this->assertSame(2, $statistics["counters"]["trips"]);
        $this->assertSame(7, $statistics["counters"]["tags"]);
    }

    protected function getApiFileContent(string $file): array
    {
        $content = file_get_contents(__DIR__ . "/fixtures/public/api/" . $file);
        return json_decode($content, true);
    }
}
