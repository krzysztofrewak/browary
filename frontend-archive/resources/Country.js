import Resource from './Resource'

class Country extends Resource {
  static assign (slug, callback, router) {
    return this.fetchFrom('/api/countries/' + slug + '.json', result => {
      callback(result)
    }).catch(() => {
      router.push({ name: '404' })
    })
  }
}

export default Country
