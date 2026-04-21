import markerImageUrl from '@/assets/marker.png'
import inactiveImageUrl from '@/assets/inactive.png'

const SOURCE = 'breweries-data'

const layers = [
  { name: 'breweries', icon: 'brew-marker', offset: [12, -16], size: 1 },
  { name: 'inactives', icon: 'inactive', offset: [8, -8], size: 0.66 }
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
          const [markerImage, inactiveImage] = await Promise.all([
            loadImage(this.map, markerImageUrl),
            loadImage(this.map, inactiveImageUrl)
          ])
          this.map.addImage('brew-marker', markerImage)
          this.map.addImage('inactive', inactiveImage)
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
              'icon-size': layer.size,
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
