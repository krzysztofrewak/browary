<template>
  <ul class="px-4" v-if="breweries">
    <li v-for="brewery in breweries" :key="brewery.slug" class="hover:bg-gray-50 py-2">
      <div class="relative flex justify-center items-center space-x-3">
        <div class="flex px-1">
          <i class="shadow large flat flag" :class="brewery.location.country.symbol"></i>
        </div>
        <div class="flex-1 flex justify-between">
          <div class="text-xs">
            {{ brewery.name }}
            <div class="text-gray-500">{{ brewery.location.city }}</div>
          </div>
          <div class="text-right text-xs whitespace-nowrap text-gray-500">
            <div>{{ brewery.date }}</div>
            <div>#{{ brewery.id }}</div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breweries: Array
  }
}
</script>
