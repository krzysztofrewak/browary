import Vue from "vue"
import Vuex from "vuex"

import "semantic-ui-css/components/icon.min.css"

import App from "@/App.vue"
import "@/assets/tailwind.css"
import "@/registerServiceWorker"
import inflections from "@/mixins/inflections"
import router from "@/router"
import store from "@/store"

Vue.mixin(inflections)
Vue.use(Vuex)

let application = new Vue({
    router,
    store,
    render: h => h(App),
})

document.getElementById("favicon").href = require("@/assets/marker.png")

fetch("/api/general.json").then(response => response.json()).then(result => {
    application.$mount("#app")
    application.$store.commit("setCounters", result.counters)
    application.$store.commit("setMapDefaultExtremes", result.extremes)
    application.$store.commit("resetMap")
})
