const SOURCE = 'breweries-data'

const layers = [
  { name: 'ghosts', icon: 'ghost', offset: [8, -8] },
  { name: 'breweries', icon: 'marker', offset: [12, -16] }
]

function loadImage (map, url) {
  return new Promise((resolve, reject) => {
    map.loadImage(url, (error, image) => {
      if (error) reject(error)
      else resolve(image)
    })
  })
}

export default {
  methods: {
    buildMarkers () {
      this.map.on('load', async () => {
        try {
          const [markerImage, ghostImage] = await Promise.all([
            loadImage(this.map, require('@/assets/marker.png')),
            loadImage(this.map, require('@/assets/ghost.png'))
          ])
          this.map.addImage('marker', markerImage)
          this.map.addImage('ghost', ghostImage)
        } catch (error) {
          console.log('Images not loaded.', error)
        }

        const result = await fetch('/api/map.json').then(r => r.json())

        this.map.addSource(SOURCE, { type: 'geojson', data: result })

        for (const layer of layers) {
          this.map.addLayer({
            id: layer.name,
            type: 'symbol',
            source: SOURCE,
            layout: {
              'icon-image': layer.icon,
              'icon-allow-overlap': true,
              'icon-ignore-placement': true,
              'icon-anchor': 'bottom'
            }
          })
          this.buildPopups(layer)
          this.linkMarkers(layer.name)
        }

        this.adjustMap()
        this.buildRoute()
        this.loading = false
      })
    },
    linkMarkers (layer) {
      this.map.on('click', layer, event => {
        const slug = event.features[0].properties.slug
        this.$router.push({ name: 'brewery', params: { slug: slug } })
      })
    }
  }
}
