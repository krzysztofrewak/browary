<?php

declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

use Brewmap\Application\Application;
use Dotenv\Dotenv;

$root = __DIR__ . "/../";
$dotenv = Dotenv::createImmutable($root);

$application = new Application($root, $dotenv);
$application->build();
