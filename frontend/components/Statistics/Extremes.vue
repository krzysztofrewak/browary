<template>
  <div class="extremes">
    <page-sub-header title="Róża wiatrów" header="Najbardziej wysunięte w każdym kierunku browary"></page-sub-header>

    <div class="compass relative mt-8 pb-4 h-56">
      <div class="w-full absolute text-xs">
        <div class="absolute top-0 right-0 w-1/2 -mt-4 p-4 pl-24 mr-10 bg-gray-100" v-if="extremes.north">
          <div class="opacity-75 py-1">północ:</div>
          <div class="flex items-center">
            <i class="flat flag mr-1" :class="extremes.north.location.country.symbol"></i>
            <router-link class="truncate" :to="{ name: 'brewery', params: { slug: extremes.north.slug }}">{{ extremes.north.name }}</router-link>
          </div>
        </div>
        <div class="absolute top-0 right-0 w-1/2 mt-34 p-4 px-12 text-right" v-if="extremes.east">
          <div class="opacity-75 py-1">wschód:</div>
          <div class="flex items-center">
            <i class="flat flag mr-1" :class="extremes.east.location.country.symbol"></i>
            <router-link class="truncate" :to="{ name: 'brewery', params: { slug: extremes.east.slug }}">{{ extremes.east.name }}</router-link>
          </div>
        </div>
        <div class="absolute top-0 left-0 w-1/2 mt-34 ml-10 p-4 pr-24 bg-gray-100 text-right" v-if="extremes.south">
          <div class="opacity-75 py-1">południe:</div>
          <div class="flex items-center">
            <i class="flat flag mr-1" :class="extremes.south.location.country.symbol"></i>
            <router-link class="truncate" :to="{ name: 'brewery', params: { slug: extremes.south.slug }}">{{ extremes.south.name }}</router-link>
          </div>
        </div>
        <div class="absolute top-0 left-0 w-1/2 px-12" v-if="extremes.west">
          <div class="opacity-75 py-1">zachód:</div>
          <div class="flex items-center">
            <i class="flat flag mr-1" :class="extremes.west.location.country.symbol"></i>
            <router-link class="truncate" :to="{ name: 'brewery', params: { slug: extremes.west.slug }}">{{ extremes.west.name }}</router-link>
          </div>
        </div>
        <icon-arrows-maximize size="192" class="aboslute mx-auto text-gray-300 transform rotate-45"/>
      </div>
    </div>
  </div>
</template>

<script>
import PageSubHeader from '../PageSubHeader'
import { IconArrowsMaximize } from '@tabler/icons-vue'

export default {
  components: { PageSubHeader, IconArrowsMaximize },
  props: {
    extremes: Object
  }
}
</script>
