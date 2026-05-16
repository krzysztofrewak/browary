<template>
  <div class="flex items-center justify-center py-1.5">
    <span class="text-gray-500 mr-3 w-1/3 shrink-0">{{ label }}</span>
    <span class="flex-1 text-right my-1.5">
      <span v-if="value">{{ value }}</span>
      <slot v-else></slot>
    </span>
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
