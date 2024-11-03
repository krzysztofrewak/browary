<template>
  <div class="extremes">
    <page-header title="Róża wiatrów" header="Najbardziej wysunięte w każdym kierunku browary"></page-header>

    <div class="compass relative mt-8 pb-4">
      <div class="w-full absolute text-xs">
        <div class="absolute top-0 right-0 w-1/2 -mt-4 p-4 pl-24 mr-10 bg-gray-100" v-if="extremes.north">
          <div class="opacity-75 py-1">północ:</div>
          <i class="flat flag mr-1" :class="extremes.north.location.country.symbol"></i>
          <router-link :to="{ name: 'brewery', params: { slug: extremes.north.slug }}">{{ extremes.north.name }}</router-link>
        </div>
        <div class="absolute top-0 right-0 w-1/2 mt-34 p-4 px-12 text-right" v-if="extremes.east">
          <div class="opacity-75 py-1">wschód:</div>
          <i class="flat flag mr-1" :class="extremes.east.location.country.symbol"></i>
          <router-link :to="{ name: 'brewery', params: { slug: extremes.east.slug }}">{{ extremes.east.name }}</router-link>
        </div>
        <div class="absolute top-0 left-0 w-1/2 mt-34 ml-10 p-4 pr-24 bg-gray-100 text-right" v-if="extremes.south">
          <div class="opacity-75 py-1">południe:</div>
          <i class="flat flag mr-1" :class="extremes.south.location.country.symbol"></i>
          <router-link :to="{ name: 'brewery', params: { slug: extremes.south.slug }}">{{ extremes.south.name }}</router-link>
        </div>
        <div class="absolute top-0 left-0 w-1/2 px-12" v-if="extremes.west">
          <div class="opacity-75 py-1">zachód:</div>
          <i class="flat flag mr-1" :class="extremes.west.location.country.symbol"></i>
          <router-link :to="{ name: 'brewery', params: { slug: extremes.west.slug }}">{{ extremes.west.name }}</router-link>
        </div>
      </div>
      <arrows-expand-icon class="mx-auto w-48 text-gray-300 transform rotate-45"></arrows-expand-icon>
    </div>
  </div>
</template>

<script>
import PageHeader from '../PageHeader'
import { ArrowsExpandIcon } from '@heroicons/vue/outline/esm'

export default {
  components: { PageHeader, ArrowsExpandIcon },
  props: {
    extremes: Object
  }
}
</script>
