<template>
  <div class="flex flex-col">
    <div class="py-1 order-2 text-sm lowercase leading-tight text-gray-500">
      {{ label }}
    </div>
    <div class="order-1 text-3xl">
      {{ value }}
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
