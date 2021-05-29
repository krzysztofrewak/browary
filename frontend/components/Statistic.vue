<template>
  <div class="flex-1 flex flex-col p-2">
    <div class="text-3xl">
      <span v-if="value">{{ value }}</span>
      <slot v-else></slot>
    </div>
    <div class="py-1 text-sm lowercase leading-tight text-gray-500">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String
  }
}
</script>
