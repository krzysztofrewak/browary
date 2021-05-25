<template>
  <ul class="px-4 divide-y divide-gray-100" v-if="entries">
    <router-link :to="route(entry)" v-for="(entry, index) in entries" :key="index" class="py-2 flex hover:bg-gray-100">
      <div class="flex justify-center items-center mx-1">
        <i class="large flat flag shadow-lg" :class="flag(entry)"></i>
      </div>
      <div class="ml-3 w-full text-xs flex items-center">
        <div class="text-gray-900 flex-1">
          {{ name(entry) }}
          <div class="text-gray-500"> {{ alt(entry) }}</div>
        </div>
        <div class="text-gray-500 text-right">
          <div v-for="(label, i) in labels" :key="i">{{ label(entry) }}</div>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    entries: Array,
    route: Function,
    name: Function,
    alt: Function,
    flag: Function,
    labels: {
      type: Array,
      default: () => []
    }
  }
}
</script>
