<template>
  <div>
    <div class="relative h-40 sm:h-56" v-if="cover">
      <img class="absolute h-full w-full object-cover" :src="cover" :alt="title">
    </div>
    <div class="mt-6 pb-2 px-4 sm:flex sm:items-end sm:px-6">
      <div class="sm:flex-1">
        <div>
          <div class="flex items-center">
            <h3 class="text-xl text-gray-900 sm:text-2xl">{{ title }}</h3>
          </div>
          <p class="text-sm text-gray-500">{{ header }}</p>
        </div>
      </div>
    </div>

    <hr class="my-4">
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    header: String,
    cover: String
  }
}
</script>
