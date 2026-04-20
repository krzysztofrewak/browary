<template>
  <div>
    <div class="mt-6 px-4 sm:flex sm:items-end sm:px-6">
      <div class="sm:flex-1">
        <div class="flex flex items-center">
          <h3 class="text-xl text-gray-900 sm:text-xl">{{ title }}</h3>
        </div>
        <p class="text-sm text-gray-500">{{ header }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    header: String
  }
}
</script>
