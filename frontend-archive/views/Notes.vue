<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl text-blue-900 font-semibold leading-none">Notatki</h1>
      <h2 class="text-gray-600">Wszystkie notatki o browarach, chronologicznie</h2>
    </div>

    <div>
      <div v-for="note in notes" class="bg-gray-100 shadow my-6 p-6 text-gray-800">
        <div class="flex mb-4">
          <router-link :to="{ name: 'country', params: { slug: note.brewery.country.slug } }">
            <i :class="note.brewery.country.symbol" class="large flat flag"></i>
          </router-link>
          <router-link :to="{ name: 'brewery', params: { slug: note.brewery.slug } }" class="pl-2">
            {{ note.brewery.name }}
          </router-link>
          <span>, {{ note.brewery.city }}</span>
        </div>
        <p class="text-justify text-sm">{{ note.note }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../resources/Notes'

export default {
  data () {
    return {
      notes: [],
    }
  },
  mounted () {
    api.assign(result => {
      this.notes = Object.values(result)
    })
  },
}
</script>