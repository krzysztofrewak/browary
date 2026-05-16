<template>
  <div v-if="brewery.name">
    <page-header :title="brewery.name" :header="brewery.altName"></page-header>

    <infobox>
      <template v-slot:general>
        <router-link class="flex flex-col items-center gap-2" :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
          <i class="shadow-lg giant flat flag" :class="brewery.location.country.symbol"></i>
          {{ brewery.location.country.name }}
        </router-link>
      </template>
      <template v-slot:list>
        <infobox-item label="adres" :value="brewery.location.address"></infobox-item>
        <infobox-item label="miasto">
          <router-link :to="{ name: 'city', params: { slug: brewery.location.city.slug } }" class="px-3 py-1.5 border rounded hover:bg-zinc-50">
            {{ brewery.location.city.name }}
            <span class="text-gray-500" v-if="brewery.location.city.translation">{{ brewery.location.city.translation }}</span>
          </router-link>
        </infobox-item>
        <infobox-item label="GPS">
          <a :href="getGoogleMapsUrl(brewery.location.coordinates)" target="_blank" class="px-3 py-1.5 border rounded hover:bg-zinc-50">
            <i class="marker icon"></i>
            <span>{{ brewery.location.coordinates[1] }}, {{ brewery.location.coordinates[0] }}</span>
          </a>
        </infobox-item>
      </template>
    </infobox>

    <hr class="pt-4">

    <infobox>
      <template v-slot:general>
        <div class="flex flex-col items-center gap-2 justify-center mx-4 text-center text-2xl leading-tight">
          <router-link :to="{ name: 'calendar.month', params: { year: brewery.date.year, month: brewery.date.month } }" class="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded-md shadow">
            {{ brewery.date.month }}
          </router-link>
          <router-link :to="{ name: 'calendar.year', params: { year: brewery.date.year } }" class="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded-md shadow">
            {{ brewery.date.year }}
          </router-link>
        </div>
      </template>
      <template v-slot:list>
        <infobox-item label="numer" :value="'#' + brewery.id"></infobox-item>
        <infobox-item label="data" :value="brewery.date.label"></infobox-item>
        <infobox-item label="wycieczka">
          <router-link :to="{ name: 'trip', params: { slug: brewery.trip.slug } }" class="inline-block px-3 py-1.5 border rounded hover:bg-zinc-50">
            {{ brewery.trip.name }}
          </router-link>
        </infobox-item>
      </template>
    </infobox>

    <hr class="py-4">

    <div v-if="brewery.note">
      <p class="px-8 pb-8 text-sm">{{ brewery.note }}</p>
      <hr class="py-4">
    </div>

    <div class="px-4 flex flex-wrap gap-x-2 gap-y-1">
      <router-link :to="{ name: 'tag', params: { slug: tag.slug } }" class="py-1.5 px-3 flex gap-2 items-center rounded-md border hover:bg-zinc-50" v-for="tag in brewery.tags" :key="tag.slug">
        {{ tag.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import api from '../api'
import Infobox from '../components/Infobox/Infobox'
import InfoboxItem from '../components/Infobox/InfoboxItem'

export default {
  components: { InfoboxItem, Infobox, PageHeader },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const brewery = ref({})

    const fetchBrewery = async () => {
      await api.fetch(router, 'breweries/' + route.params.slug, (data) => {
        data.tags = Object.values(data.tags)

        brewery.value = data
        store.commit('selectBrewery', data)
      })
    }

    onMounted(() => fetchBrewery())
    watch(() => route.params.slug, () => {
      if (route.name === 'brewery') {
        fetchBrewery()
      }
    })

    return {
      brewery
    }
  },
  methods: {
    getGoogleMapsUrl (coordinates) {
      return 'https://www.google.com/maps/search/' + coordinates[1] + ',' + coordinates[0]
    }
  }
}
</script>
