class Resource {
    static fetchFrom(url, callback) {
        return fetch(url  + "?cache=" + (new Date().getTime())).then(response => response.json()).then(result => {
            callback(result)
        })
    }
}

export default Resource