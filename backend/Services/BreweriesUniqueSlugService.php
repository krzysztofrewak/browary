<?php

declare(strict_types=1);

namespace Brewmap\Services;

use Brewmap\Models\Brewery;
use Illuminate\Support\Collection;

final class BreweriesUniqueSlugService
{
    private Collection $slugs;

    public function __construct()
    {
        $this->slugs = new Collection();
    }

    public function process(Brewery $brewery): void
    {
        $isUnique = !$this->slugs->has($brewery->getSlug());

        if ($isUnique) {
            $this->slugs->put($brewery->getSlug(), 1);
        } else {
            $counter = $this->slugs->get($brewery->getSlug());
            $this->slugs->put($brewery->getSlug(), $counter++);
            $brewery->updateSlug($counter);
        }
    }
}