<template>
  <div class="flex-1 flex flex-col">
    <div class="text-2xl font-semibold pt-1">
      <span v-if="value">{{ value }}</span>
      <slot v-else></slot>
    </div>
    <div class="text-sm lowercase leading-tight text-gray-500" v-html="label"></div>
    <div class="text-sm lowercase leading-tight text-gray-400" v-if="sublabel" v-html="sublabel"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    sublabel: String,
    value: [String, Number]
  }
}
</script>
