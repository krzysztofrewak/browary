<?php

declare(strict_types=1);

use Illuminate\Support\Collection;
use PHPUnit\Framework\TestCase;

class TagsTest extends TestCase
{
    public function testIfTagsAreRelativelyUnique(): void
    {
        $tags = $this->getTagsData();

        foreach ($tags as $tag) {
            foreach ($tags as $comparee) {
                if ($tag !== $comparee) {
                    $this->assertGreaterThan(2, levenshtein($tag, $comparee), "Tag ${tag} is too much similar to ${comparee}");
                }
            }
        }
    }

    protected function getTagsData(): array
    {
        $tags = [];

        $countries = json_decode(file_get_contents(__DIR__ . "/../../resources/countries.json"), true)["countries"];
        $trips = (new Collection(glob(__DIR__ . "/../../resources/trips/*.json")))
            ->map(fn(string $filename): array => json_decode(file_get_contents($filename), true))
            ->toArray();

        foreach ($countries as $country) {
            foreach ($country["tags"] as $tag) {
                $tags[$tag] = true;
            }
        }

        foreach ($trips as $trip) {
            foreach ($trip["breweries"] as $brewery) {
                foreach ($brewery["tags"] as $tag) {
                    $tags[$tag] = true;
                }
            }
        }

        return array_keys($tags);
    }
}
