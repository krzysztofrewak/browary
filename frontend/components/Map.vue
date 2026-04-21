<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center w-full h-full bg-[#c8d8dd] text-zinc-900/50 overflow-hidden">
      <div class="animate-pulse flex flex-wrap justify-center items-center max-w-3xl gap-x-8 gap-y-3 p-16 select-none">
        <span class="text-5xl font-light opacity-50">Brauerei</span>
        <span class="text-6xl font-bold">brewery</span>
        <span class="text-4xl font-semibold italic opacity-60">brasserie</span>
        <span class="text-4xl font-extrabold opacity-75">醸造所</span>
        <span class="text-2xl font-normal italic opacity-40">cervecería</span>
        <span class="text-5xl font-bold opacity-70">пивоварня</span>
        <span class="text-3xl font-normal italic opacity-50">pivara</span>
        <span class="text-7xl font-extrabold italic">browar</span>
        <span class="text-3xl font-medium italic opacity-55">birrificio</span>
        <span class="text-5xl font-extrabold opacity-40">양조장</span>
        <span class="text-xl font-light opacity-35">ζυθοποιείο</span>
        <span class="text-4xl font-semibold opacity-65">brouwerij</span>
        <span class="text-5xl font-bold italic opacity-80">pivovar</span>
        <span class="text-2xl font-normal opacity-45">pivovara</span>
        <span class="text-3xl font-medium opacity-50">bryggeri</span>
        <span class="text-xl font-light italic opacity-30">õlletehas</span>
        <span class="text-2xl font-semibold opacity-45">brugghús</span>
        <span class="text-5xl font-extrabold italic opacity-60">sörfőzde</span>
        <span class="text-4xl font-bold opacity-55">cervejaria</span>
      </div>
    </div>
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import adjuster from '../mixins/map/adjuster'
import controls from '../mixins/map/controls'
import countries from '../mixins/map/countries'
import markers from '../mixins/map/markers'
import popups from '../mixins/map/popups'
import route from '../mixins/map/route'
import search from '../mixins/map/search'
import { IconMapPin } from '@tabler/icons-vue'

export default {
  components: {
    IconMapPin
  },
  mixins: [
    adjuster,
    controls,
    countries,
    markers,
    popups,
    route,
    search
  ],
  mounted () {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    this.buildMap()
  },
  data () {
    return {
      loading: true,
      map: null,
      filtered: []
    }
  },
  methods: {
    buildMap () {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: import.meta.env.VITE_MAPBOX_STYLE_URL
      })

      this.addControls()
      this.addSearch()
      this.buildCountries()
      this.buildMarkers()
    }
  }
}
</script>

<style lang="scss">
.map-marker-popup > div:not(:first-child) {
  padding: 4px 8px;
}

#map-controls {
  i {
    margin: auto;
  }
}
</style>
