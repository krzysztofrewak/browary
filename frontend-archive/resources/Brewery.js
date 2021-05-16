import Resource from './Resource'

class Brewery extends Resource {
  static assign (slug, callback, router) {
    return this.fetchFrom('/api/breweries/' + slug + '.json', result => {
      callback(result)
    }).catch(() => {
      router.push({ name: '404' })
    })
  }
}

export default Brewery
