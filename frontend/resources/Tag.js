import Resource from './Resource'

class Tag extends Resource {
  static assign (slug, callback, router) {
    return this.fetchFrom('/api/tags/' + slug + '.json', result => {
      callback(result)
    }).catch(() => {
      router.push({ name: '404' })
    })
  }
}

export default Tag
