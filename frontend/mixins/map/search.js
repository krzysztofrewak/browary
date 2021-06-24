import mapbox from 'mapbox-gl'
import slugify from 'slugify'
import Geocoder from '@mapbox/mapbox-gl-geocoder'

async function forwardGeocoder (query) {
  const matchingFeatures = []

  const response = await fetch('/api/search.json')
  const json = await response.json()

  for (const brewery of json) {
    if (brewery.searchable.includes(slugify(query))) {
      const feature = []
      feature.custom = true
      feature.place_name = brewery.name
      feature.description = brewery.description
      feature.symbol = brewery.symbol
      feature.center = brewery.center
      feature.slug = brewery.slug
      matchingFeatures.push(feature)
    }
  }

  return matchingFeatures
}

export default {
  methods: {
    addControls () {
      const geocoder = new Geocoder({
        accessToken: mapbox.accessToken,
        marker: false,
        mapboxgl: this.map,
        types: 'country,region,district,place',
        externalGeocoder: forwardGeocoder,
        zoom: 12,
        flyTo: false,
        render: (feature) => {
          let title = ''
          let description = ''
          let flag = ''

          if (feature.custom === true) {
            title = feature.place_name
            description = feature.description
            flag = '<i class="flat flag ' + feature.symbol + '"></i> '
          } else {
            const placeName = feature.place_name.split(',')
            title = placeName[0]
            description = placeName.splice(1, placeName.length).join(',')
          }

          return '<div class="mapboxgl-ctrl-geocoder--suggestion">' +
            '<div class="mapboxgl-ctrl-geocoder--suggestion-title">' + title + '</div>' +
            '<div class="mapboxgl-ctrl-geocoder--suggestion-address">' + flag + description + '</div>' +
            '</div>'
        }
      })

      this.map.addControl(geocoder)

      geocoder.on('result', (result) => {
        if (result.result.custom === true) {
          this.$router.push({ name: 'brewery', params: { slug: result.result.slug } })
          geocoder.clear()
          return
        }

        this.map.fitBounds(result.result.bbox, {
          linear: true
        })
      })
    }
  }
}
