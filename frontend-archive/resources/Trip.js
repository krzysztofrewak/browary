import Resource from './Resource'

class Trip extends Resource {
  static assign (slug, callback, router) {
    return this.fetchFrom('/api/trips/' + slug + '.json', result => {
      callback(result)
    }).catch(() => {
      router.push({ name: '404' })
    })
  }
}

export default Trip
