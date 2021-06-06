<template>
  <List :entries="breweries"
      :name="b => b.name"
      :alt="b => b.location.city.name"
      :flag="b => b.location.country.symbol"
      :route="b => { return { name: 'brewery', params: { slug: b.slug }}}"
      :labels="[b => b.date, b => '#' + b.id]"
  ></List>
</template>

<script>
import List from './List'
export default {
  components: { List },
  props: {
    breweries: Array
  }
}
</script>
