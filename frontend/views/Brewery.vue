<template>
  <div v-if="brewery.name">
    <PageHeader :title="brewery.name" :header="brewery.location.city"></PageHeader>

    <div class="flex items-center justify-center px-4 pb-4">
      <div class="w-32 text-center">
        <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
          <i class="shadow-lg giant flat flag" :class="brewery.location.country.symbol"></i>
        </router-link>
      </div>
      <div class="flex-1 text-sm divide-y divide-gray-100 px-4">
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">państwo</span>
          <span class="flex-1 text-right">
            <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
              {{ brewery.location.country.name }}
            </router-link>
          </span>
        </div>
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">miasto</span>
          <span class="flex-1 text-right">{{ brewery.location.city }}</span>
        </div>
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">adres</span>
          <span class="flex-1 text-right">{{ brewery.location.address }}</span>
        </div>
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">GPS</span>
          <span class="flex-1 text-right">
            <a :href="getGoogleMapsUrl(brewery.location.coordinates)" target="_blank">
              <i class="external link icon"></i>
              {{ brewery.location.coordinates[1] }},
              {{ brewery.location.coordinates[0] }}
            </a>
          </span>
        </div>
      </div>
    </div>

    <hr class="pt-4">

    <div class="flex items-center justify-center px-4 pb-4">
      <div class="flex flex-col items-center justify-center w-32 text-center text-2xl leading-tight">
        <router-link :to="{ name: 'calendar.month', params: { year: brewery.date.year, month: brewery.date.month } }" class="z-10 mt-2 mr-12 bg-gray-100 p-1 rounded-md">
          {{ brewery.date.month }}
        </router-link>
        <router-link :to="{ name: 'calendar.year', params: { year: brewery.date.year } }" class="z-10 -mt-4 ml-12 bg-gray-100 p-1 rounded-md">
          {{ brewery.date.year.substr(2) }}
        </router-link>
        <span class="opacity-75 absolute text-4xl">
          /
        </span>
      </div>
      <div class="flex-1 text-sm divide-y divide-gray-100 px-4">
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">odwiedzony browar</span>
          <span class="flex-1 text-right">#{{ brewery.id }}</span>
        </div>
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">data</span>
          <span class="flex-1 text-right">
            {{ brewery.date.label }}
          </span>
        </div>
        <div class="flex items-center justify-center py-1">
          <span class="text-gray-500">wycieczka</span>
          <span class="flex-1 text-right">
            <router-link :to="{ name: 'trip', params: { slug: brewery.trip.slug } }">
            {{ brewery.trip.name }}
            </router-link>
          </span>
        </div>
      </div>
    </div>

    <hr class="pt-4">

    <div v-if="brewery.note">
      <p class="px-8 pt-4 pb-8 text-sm">{{ brewery.note }}</p>
      <hr class="py-4">
    </div>

    <div class="px-4 flex flex-wrap">
      <router-link :to="{ name: 'tag', params: { slug: tag.slug } }" class="py-1 px-2 m-0.5 items-center rounded-md text-sm bg-gray-100" v-for="tag in brewery.tags" :key="tag.slug">
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

export default {
  components: { PageHeader },
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
