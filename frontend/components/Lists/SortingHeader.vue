<template>
    <div class="px-4 pb-2 w-full flex text-gray-500 text-xs">
      <div class="divide-x divide-gray-200">
        <div class="inline cursor-pointer mr-2 pl-2" @click="header.method(entries)" v-for="header in left" :key="header.label">
          {{ header.label }}
        </div>
      </div>
      <div class="divide-x divide-gray-200 w-full text-right">
        <div class="inline cursor-pointer mr-2 pl-2" @click="header.method(entries)" v-for="header in right" :key="header.label">
          {{ header.label }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    entries: Object,
    left: Array,
    right: Array
  },
  computed: {
  }
}
</script>
