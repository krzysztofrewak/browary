import './tailwind.css'

import { createApp } from 'vue'
import router from './router.js'
import store from './store.js'
import App from './components/App.vue'
import inflections from './mixins/inflections'

const application = createApp(App)
  .use(store)
  .use(router)
  .mixin(inflections)

fetch('/api/general.json').then(response => response.json()).then(result => {
  application.mount('#app')
  store.commit('setCounters', result.counters)
  store.commit('setMapDefaultExtremes', result.extremes)
  store.commit('resetMap')
})
