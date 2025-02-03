export default {
  methods: {
    buildCountries () {
      this.map.on('load', async () => {
        this.map.addSource('countries', {
          type: 'vector',
          url: 'mapbox://mapbox.country-boundaries-v1'
        })

        await fetch('/api/countries.json' + '?cache=' + (new Date().getTime())).then(response => response.json()).then(result => {
          console.log(result)
          this.map.addLayer({
            id: 'country-fill',
            type: 'fill',
            source: 'countries',
            'source-layer': 'country_boundaries',
            paint: {
              'fill-color': '#CCCCCC',
              'fill-opacity': 0.45
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
        })
      })
    }
  }
}
