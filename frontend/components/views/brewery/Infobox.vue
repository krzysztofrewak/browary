<template>
  <div class="mt-10 mb-6 text-center w-full flex flex-wrap justify-center">
    <infobox-entry icon="calendar alternate" label="odwiedzony">
      {{ brewery.date }}
    </infobox-entry>

    <infobox-entry icon="plane" label="wizyta">
      <router-link :to="{ name: 'trip', params: { slug: brewery.trip.slug } }">
        {{ brewery.trip.name }}
      </router-link>
    </infobox-entry>

    <infobox-entry icon=" map signs" label="adres">
      {{ brewery.location.address }},
      {{ brewery.location.city }}
    </infobox-entry>

    <infobox-entry icon="map marker alternate" label="koordynaty">
      <a :href="mapsLink" target="_blank">
        {{ brewery.location.coordinates[1] }}<br>
        {{ brewery.location.coordinates[0] }}
      </a>
    </infobox-entry>
  </div>
</template>

<script>
import InfoboxEntry from "./InfoboxEntry"

export default {
  components: {InfoboxEntry},
  props: {
    brewery: {
      type: Object,
      default: true,
    },
  },
  computed: {
    mapsLink() {
      let link = "https://www.google.com/maps/place/"
      link += this.brewery.location.coordinates[1]
      link += ", "
      link += this.brewery.location.coordinates[0]
      return link
    },
  },
}
</script>
