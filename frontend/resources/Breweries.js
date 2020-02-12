import Resource from "./Resource"

class Breweries extends Resource {
	static assign(resource) {
		return this.fetchFrom("/api/breweries.json", result => {
			resource(result)
		})
	}
}

export default Breweries
