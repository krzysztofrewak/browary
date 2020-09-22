<template>
  <div class="flex flex-wrap my-10 mx-4">
    <div class="pr-4" v-for="tag in tags">
      <router-link :to="{ 'name': 'tag', params: { slug: tag.slug } }">
        <i class="text-gray-600 fitted hashtag icon"></i>
        {{ tag.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
}
</script>
