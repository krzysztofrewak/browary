const LABEL_LAYERS = ['country-label', 'state-label', 'settlement-major-label', 'settlement-minor-label']

export default {
  methods: {
    buildCountries () {
      this.map.once('load', async () => {
        this.map.addSource('countries', {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1'
        })

        const result = await fetch('/api/countries.json?cache=' + Date.now()).then(r => r.json())

        this.map.addLayer({
          id: 'country-fill',
          type: 'fill',
          source: 'countries',
          'source-layer': 'country_boundaries',
          paint: {
            'fill-color': '#CCCCCC',
            'fill-opacity': 0.33
          },
          filter: [
            'all',
            [
              'any',
              ['==', 'all', ['get', 'worldview']],
              ['in', 'US', ['get', 'worldview']]
            ],
            ['==', 'false', ['get', 'disputed']],
            ['!', ['match', ['get', 'iso_3166_1'], Object.values(result).map(c => c.symbol.toUpperCase()), true, false]]
          ]
        })

        for (const layer of LABEL_LAYERS) {
          if (this.map.getLayer(layer)) {
            this.map.moveLayer(layer)
          }
        }
      })
    }
  }
}
