<template>
  <div>
    <page-header :title="title" subtitle="Odwiedzone browary, chronologicznie"></page-header>
    <breweries :breweries="breweries"></breweries>
  </div>
</template>

<script>
import Breweries from "../components/Breweries"
import PageHeader from "../components/PageHeader"

export default {
  components: {PageHeader, Breweries},
  data() {
    return {
      title: "~",
      breweries: [],
    }
  },
  mounted() {
    this.initializeView()
  },
  methods: {
    initializeView() {
      let url = "/api/calendar/" + this.$route.params.year
      if (this.$route.params.month) {
        url += "/" + this.$route.params.month
      }
      url += ".json"

      fetch(url).then(response => response.json()).then(result => {
        this.title = result.label
        this.breweries = result.breweries

        if (this.$route.params.month) {
          result.slug = this.$route.params.year + "-" + this.$route.params.month
          this.$store.commit("setFilter", {type: "month", item: result})
        } else {
          this.$store.commit("setFilter", {type: "year", item: result})
        }
      })
    },
  },
  watch: {
    "$route.params.year"() {
      this.initializeView()
    },
    "$route.params.month"() {
      this.initializeView()
    },
  },
}
</script>