<template>
  <div v-if="tag">
    <page-header :subtitle="subtitle" :title="tag.name"></page-header>
    <breweries :breweries="tag.breweries"></breweries>
  </div>
</template>

<script>
import api from '../resources/Tag'
import Breweries from '../components/Breweries'
import PageHeader from '../components/PageHeader'

export default {
  components: {
    Breweries,
    PageHeader,
  },
  data () {
    return {
      tag: null,
    }
  },
  computed: {
    subtitle () {
      return 'Odwiedzone browary z tagiem (' + this.tag.breweriesCount + ')'
    },
  },
  mounted () {
    this.initializeView()
  },
  methods: {
    initializeView () {
      api.assign(this.$route.params.slug, result => {
        this.tag = result
        this.$store.commit('setFilter', { type: 'tag', item: this.tag })
      }, this.router)
    },
  },
  watch: {
    '$route.params.slug' () {
      this.initializeView()
    },
  },
}
</script>