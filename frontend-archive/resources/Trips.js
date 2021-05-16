import Resource from './Resource'

class Trips extends Resource {
  static assign (resource) {
    return this.fetchFrom('/api/trips.json', result => {
      resource(result)
    })
  }
}

export default Trips
