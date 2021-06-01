<template>
  <div v-if="brewery.name">
    <page-header :title="brewery.name"></page-header>

    <infobox>
      <template v-slot:general>
        <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
          <i class="shadow-lg giant flat flag" :class="brewery.location.country.symbol"></i>
        </router-link>
      </template>
      <template v-slot:list>
        <infobox-item label="państwo">
          <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
            {{ brewery.location.country.name }}
          </router-link>
        </infobox-item>
        <infobox-item label="miasto" :value="brewery.location.city"></infobox-item>
        <infobox-item label="adres" :value="brewery.location.address"></infobox-item>
        <infobox-item label="GPS">
          <a :href="getGoogleMapsUrl(brewery.location.coordinates)" target="_blank">
            <i class="external link icon"></i>
            {{ brewery.location.coordinates[1] }},
            {{ brewery.location.coordinates[0] }}
          </a>
        </infobox-item>
      </template>
    </infobox>

    <hr class="pt-4">

    <infobox>
      <template v-slot:general>
        <div class="flex flex-col items-center justify-center w-32 text-center text-2xl leading-tight">
          <router-link :to="{ name: 'calendar.month', params: { year: brewery.date.year, month: brewery.date.month } }" class="z-10 mt-2 mr-12 bg-gray-100 p-1 rounded-md shadow">
            {{ brewery.date.month }}
          </router-link>
          <router-link :to="{ name: 'calendar.year', params: { year: brewery.date.year } }" class="z-10 -mt-4 ml-12 bg-gray-100 p-1 rounded-md shadow">
            {{ brewery.date.year.substr(2) }}
          </router-link>
          <span class="opacity-75 absolute text-4xl">
          /
        </span>
        </div>
      </template>
      <template v-slot:list>
        <infobox-item label="odwiedzony browar" :value="'#' + brewery.id"></infobox-item>
        <infobox-item label="data" :value="brewery.date.label"></infobox-item>
        <infobox-item label="wycieczka">
          <router-link :to="{ name: 'trip', params: { slug: brewery.trip.slug } }">
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

    <div class="px-4 flex flex-wrap">
      <router-link :to="{ name: 'tag', params: { slug: tag.slug } }" class="py-1 px-2 m-0.5 items-center rounded-md text-sm bg-gray-100 shadow" v-for="tag in brewery.tags" :key="tag.slug">
        <i class="hashtag icon"></i>
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
