<template>
  <div class="h-full flex flex-col items-stretch" id="app">
    <navigation></navigation>

    <div class="flex flex-row h-full w-full bg-gray-200 overflow-y-hidden">
      <div class="w-0 sm:w-1/2 xl:w-1/3 bg-gray-200 overflow-x-hidden overflow-y-hidden">
        <scroll :ops="ops">
          <div class="p-8">
            <router-view></router-view>
          </div>
        </scroll>
      </div>
      <map-panel></map-panel>
    </div>
  </div>
</template>

<script>
import Map from "@/components/layout/Map"
import Navigation from "@/components/layout/Navigation"
import Scroll from "vuescroll"

export default {
  components: {
    "map-panel": Map,
    Navigation,
    Scroll,
  },
  data() {
    return {
      ops: {
        bar: {
          background: "#a0aec0",
        },
        rail: {
          gutterOfSide: "4px",
          gutterOfEnds: "8px",
        },
      },
    }
  },
}
</script>
