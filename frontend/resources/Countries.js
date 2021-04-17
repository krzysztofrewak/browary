import Resource from './Resource'

class Countries extends Resource {
  static assign (resource) {
    return this.fetchFrom('/api/countries.json', result => {
      resource(result)
    })
  }
}

export default Countries
