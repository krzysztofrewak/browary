<template>
  <div v-if="brewery" class="flex flex-1 flex-col justify-center items-center">
    <router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
      <i :class="brewery.location.country.symbol" class="huge flat flag"></i>
    </router-link>
    <router-link :to="{ name: 'brewery', params: { slug: brewery.slug } }">
      {{ brewery.name }}
    </router-link>
  </div>
  <div v-else class="flex-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    brewery: {
      type: Object,
      required: false,
    },
  },
}
</script>
