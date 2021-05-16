<template>
  <div>
    <h2 class="text-xl text-blue-900 leading-none">{{ title }}</h2>
    <h2 v-if="subtitle" class="mb-4 text-gray-600">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
}
</script>
