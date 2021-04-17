import Resource from './Resource'

class Calendar extends Resource {
  static assign (resource) {
    return this.fetchFrom('/api/calendar.json', result => {
      resource(result)
    })
  }
}

export default Calendar
