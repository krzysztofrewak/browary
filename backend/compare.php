<?php

declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

$publishedRaw = file_get_contents("https://browary.rewak.pl/api/statistics.json");
$publishedData = json_decode($publishedRaw, associative: true);

$raw = file_get_contents("./public/api/statistics.json");
$data = json_decode($raw, associative: true);

foreach (["breweries", "countries", "cities", "trips", "tags"] as $section) {
    if ($data["counters"][$section] > $publishedData["counters"][$section]) {
        $number = $data["counters"][$section] - $publishedData["counters"][$section];
        echo "> new $section: $number" . PHP_EOL;
    }
}

echo "> " . PHP_EOL;

foreach (["breweries", "countries", "cities", "trips", "tags"] as $section) {
    $number = $data["counters"][$section];
    echo "> $section: $number" . PHP_EOL;
}
