export default {
  methods: {
    buildCountries () {
      this.map.on('load', async () => {
        this.map.addSource('countries', {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1'
        })

        await fetch('/api/countries.json' + '?cache=' + (new Date().getTime())).then(response => response.json()).then(result => {
          this.map.addLayer({
            id: 'country-fill',
            type: 'fill',
            source: 'countries',
            'source-layer': 'country_boundaries',
            paint: {
              'fill-color': '#CCCCCC',
              'fill-opacity': 0.66
            },
            filter: [
              'all',
              [
                'any',
                ['==', 'all', ['get', 'worldview']],
                ['in', 'US', ['get', 'worldview']]
              ],
              ['==', 'false', ['get', 'disputed']],
              ['!', ['match', ['get', 'iso_3166_1'], Object.values(result).map(country => country.symbol.toUpperCase()), true, false]]
            ]
          })

          this.map.moveLayer('country-label')
          this.map.moveLayer('state-label')
          this.map.moveLayer('settlement-major-label')
          this.map.moveLayer('settlement-minor-label')
        })
      })
    }
  }
}
