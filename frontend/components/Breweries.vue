<template>
  <div>
    <div class="flex text-sm p-2 border-b items-center hover:bg-gray-300" v-for="brewery in breweries">
      <div class="mt-1 mr-3">
        <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
          <i :class="brewery.location.country.symbol" class="large flat flag"></i>
        </router-link>
      </div>
      <div class="leading-snug flex-grow">
        <router-link :to="{ name: 'brewery', params: { slug: brewery.slug } }">
          {{ brewery.name }}
        </router-link>
        <div class="text-gray-600">{{ brewery.location.city }}</div>
      </div>
      <div class="text-gray-600 text-right">
        <div>{{ brewery.date }}</div>
        <div>#{{ brewery.id }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breweries: {
      type: Array,
      required: true,
    },
  },
}
</script>
