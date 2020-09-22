<template>
  <section class="w-full my-6">
    <section-header subtitle="Ekstremalne współrzędne dla każdego kierunku"
                    title="Najdalej wysunięte browary"></section-header>

    <div class="flex flex-col w-full items-center text-center">
      <compass-row>
        <compass-country></compass-country>
        <compass-country :brewery="extremes.north"></compass-country>
        <compass-country></compass-country>
      </compass-row>
      <compass-row>
        <compass-country :brewery="extremes.west"></compass-country>
        <compass-country>
          <i class="text-gray-400 huge compass outline icon"></i>
        </compass-country>
        <compass-country :brewery="extremes.east"></compass-country>
      </compass-row>
      <compass-row>
        <compass-country></compass-country>
        <compass-country :brewery="extremes.south"></compass-country>
        <compass-country></compass-country>
      </compass-row>
    </div>
  </section>
</template>

<script>
import CompassCountry from "./CompassCountry"
import CompassRow from "./CompassRow"
import SectionHeader from "../../SectionHeader"

export default {
  components: {
    SectionHeader,
    CompassCountry,
    CompassRow,
  },
  props: {
    extremes: {
      type: Object,
    },
  },
}
</script>
