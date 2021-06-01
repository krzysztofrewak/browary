<template>
  <ul class="px-4 divide-y divide-gray-100" v-if="entries">
    <router-link :to="route(entry)" v-for="(entry, index) in entries" :key="index" class="trip flex hover:bg-gray-100" :class="paddingClass">
      <div class="flex justify-center items-center mx-2">
        <div class="flags whitespace-nowrap -mr-2" v-if="flags">
          <span class="ml-1" v-for="(flag) in flags(entry)" :key="flag.slug">
            <i class="flat flag shadow" :class="flag.symbol"></i>
          </span>
        </div>
        <i class="large flat flag shadow-lg" :class="flag(entry)" v-if="flag"></i>
      </div>
      <div class="mx-2 w-full text-xs flex items-center">
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
    flags: Function,
    labels: {
      type: Array,
      default: () => []
    },
    customCover: Boolean,
    padding: {
      type: Number,
      default: 2
    }
  },
  computed: {
    paddingClass () {
      return 'py-' + this.padding
    }
  }
}
</script>
