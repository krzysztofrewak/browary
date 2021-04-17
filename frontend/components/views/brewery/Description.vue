<template>
  <p v-if="note" class="my-10 mx-2">{{ note }}</p>
  <p v-else class="my-10 mx-2 text-gray-600">Nie zapisano żadnej notatki o tym browarze.</p>
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
