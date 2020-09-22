<template>
  <p class="my-10 mx-2" v-if="note">{{ note }}</p>
  <p class="my-10 mx-2 text-gray-600" v-else>Nie zapisano żadnej notatki o tym browarze.</p>
</template>

<script>
export default {
  props: {
    note: {
      type: String,
    },
  },
}
</script>
