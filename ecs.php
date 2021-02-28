<?php

declare(strict_types=1);

use Blumilk\Codestyle\Config;
use Blumilk\Codestyle\Configuration\Defaults\CommonAdditionalRules;
use Blumilk\Codestyle\Configuration\Defaults\Paths;
use Blumilk\Codestyle\Configuration\Utils\Rule;
use PhpCsFixer\Fixer\Phpdoc\PhpdocLineSpanFixer;

$forceOneLineDocBlocks = new Rule(PhpdocLineSpanFixer::class,
    ["const" => "single", "property" => "single", "method" => "single"]);

$rules = new CommonAdditionalRules();

$config = new Config(
    paths: new Paths("backend"),
    rules: $rules->add($forceOneLineDocBlocks),
);

return $config->config();
