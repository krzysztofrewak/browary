import Resource from './Resource'

class Tags extends Resource {
  static assign (resource) {
    return this.fetchFrom('/api/tags.json', result => {
      resource(result)
    })
  }
}

export default Tags
