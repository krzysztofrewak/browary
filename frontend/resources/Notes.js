import Resource from "./Resource"

class Notes extends Resource {
    static assign(resource) {
        return this.fetchFrom("/api/notes.json", result => {
            resource(result)
        })
    }
}

export default Notes
