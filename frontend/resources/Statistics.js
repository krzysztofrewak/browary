import Resource from "./Resource"

class Statistics extends Resource {
	static assign(resource) {
		return this.fetchFrom("/api/statistics.json", result => {
			resource(result)
		})
	}
}

export default Statistics
