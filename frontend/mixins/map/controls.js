import mapbox from "mapbox-gl"
import geocoder from "@mapbox/mapbox-gl-geocoder"

class MapboxGLButtonControls {
    constructor({id, controls = []}) {
        this.id = id
        this.controls = controls
    }

    onAdd() {
        this.container = document.createElement("div")
        this.container.id = this.id
        this.container.className = "mapboxgl-ctrl-group mapboxgl-ctrl"

        this.controls.forEach(control => {
            let icon = document.createElement("i")
            icon.className = control.icon

            let button = document.createElement("button")
            button.title = control.title
            button.onclick = control.eventHandler
            button.appendChild(icon)

            this.container.appendChild(button)
        })

        return this.container
    }

    onRemove() {
        this.container.parentNode.removeChild(this.container)
        this.map = undefined
    }
}

export default {
    methods: {
        addControls() {
            let test = new MapboxGLButtonControls({
                id: "map-controls",
                controls: [
                    {
                        title: "Przywróć główny widok",
                        icon: "home icon",
                        eventHandler: () => {
                            this.$store.commit("resetMap")
                        },
                    },
                    {
                        title: "Przełącz markery",
                        icon: "marker icon",
                        eventHandler: () => {
                            this.$store.commit("toggleGhosts")
                        },
                    },
                ],
            })

            this.map.addControl(test, "top-left")
            this.map.addControl(new mapbox.NavigationControl(), "top-left")
            this.map.addControl(new mapbox.ScaleControl(), "bottom-left")
            this.map.addControl(
                new geocoder({
                    accessToken: mapbox.accessToken,
                    marker: false,
                    mapboxgl: this.map,
                    types: "country,region,district,place",
                }),
            )
        },
    },
}