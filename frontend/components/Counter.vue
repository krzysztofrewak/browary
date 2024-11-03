<template>
  <div class="flex-1 flex flex-col">
    <div class="text-3xl py-1">
      <span v-if="value">{{ value }}</span>
      <slot v-else></slot>
    </div>
    <div class="text-sm lowercase leading-tight text-gray-500">
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
