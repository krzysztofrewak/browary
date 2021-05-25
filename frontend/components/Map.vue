<template>
  <div class="flex-grow h-full">
    <div v-if="loading" class="flex justify-center items-center w-full h-full bg-gray-300 text-gray-400">
        <LocationMarkerIcon class="h-36 w-36 animate-pulse" aria-hidden="true"/>
    </div>
    <div id="map" class="w-full h-full">
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import adjuster from '@/mixins/map/adjuster'
import controls from '@/mixins/map/controls'
import markers from '@/mixins/map/markers'
import popups from '@/mixins/map/popups'
import { LocationMarkerIcon } from '@heroicons/vue/outline'

export default {
  components: {
    LocationMarkerIcon
  },
  mixins: [
    adjuster,
    controls,
    markers,
    popups
  ],
  mounted () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
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
        style: process.env.VUE_APP_MAPBOX_STYLE_URL
      })

      this.addControls()
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
