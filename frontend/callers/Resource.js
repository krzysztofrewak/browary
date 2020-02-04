class Resource {
	static fetchFrom(url, callback) {
		fetch(url).then(response => response.json()).then(result => {
			callback(result)
		})
	}
}

export default Resource