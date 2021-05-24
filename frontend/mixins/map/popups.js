import mapbox from 'mapbox-gl'

export default {
  methods: {
    buildPopups (layer) {
      const popup = new mapbox.Popup({
        closeButton: false,
        closeOnClick: false,
        anchor: 'left',
        maxWidth: 'none',
        offset: layer.offset,
        className: 'map-marker-popup text-gray-700'
      })

      this.map.on('mousemove', layer.name, event => {
        const label = event.features[0].properties.label
        const flag = '<i class=\'flat ' + event.features[0].properties.symbol + ' flag\'></i>'
        const coordinates = event.features[0].geometry.coordinates.slice()

        while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
        }

        popup.setLngLat(coordinates).setHTML(flag + ' ' + label).addTo(this.map)
      })

      this.map.on('mouseleave', layer.name, () => {
        popup.remove()
      })
    }
  }
}
