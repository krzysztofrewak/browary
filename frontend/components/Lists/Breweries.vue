<template>
  <List :entries="breweries"
      :name="b => b.name"
      :additional="b => b.altName"
      :alt="b => [b.location.city.name, b.location.city.translation].filter(w => w.length).join(' | ')"
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
