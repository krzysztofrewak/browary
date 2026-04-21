<template>
  <div class="h-screen flex bg-gray-50 overflow-hidden">
    <mobile-width-sidebar :navigation="navigation" :mobile-menu-open="mobileMenuOpen" @hide="mobileMenuOpen = false"/>
    <full-width-sidebar :navigation="navigation"/>

    <main class="flex-1 min-w-0 overflow-hidden relative">
      <brewmap class="absolute inset-0"/>

      <div class="absolute top-0 right-0 z-30 lg:hidden m-3">
        <button type="button" class="h-12 w-12 inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-md text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Otwórz menu</span>
          <menu-icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>

      <div
        class="absolute bottom-0 inset-x-0 h-3/4 bg-white z-10 shadow-2xl rounded-t-xl transition-transform duration-300 lg:transition-none lg:inset-x-auto lg:top-4 lg:bottom-4 lg:left-4 lg:w-120 lg:rounded-xl lg:translate-y-0"
        :class="contentOpen ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'"
      >
        <div class="lg:hidden h-16 flex flex-col items-center justify-center cursor-pointer shrink-0" @click="toggle">
          <div class="w-12 h-1.5 bg-gray-200 rounded-full"/>
        </div>
        <div class="overflow-y-auto lg:h-full" :class="contentOpen ? 'h-[calc(100%-4rem)]' : 'h-0 overflow-hidden'">
          <router-view/>
          <div class="w-full">&nbsp;</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { MenuIcon } from '@heroicons/vue/outline'

import Map from './Map'
import MobileWidthSidebar from './Layout/MobileWidthSidebar'
import FullWidthSidebar from './Layout/FullWidthSidebar'
import navigationItems from '../navigation'

export default {
  components: {
    brewmap: Map,
    FullWidthSidebar,
    MobileWidthSidebar,
    MenuIcon
  },
  setup () {
    const store = useStore()
    const mobileMenuOpen = ref(false)
    const navigation = ref(navigationItems)
    const contentOpen = computed(() => store.getters.contentOpen)

    const toggle = () => store.commit('setContentOpen', !contentOpen.value)

    const syncWithScreen = () => {
      if (window.innerWidth >= 1024) store.commit('setContentOpen', true)
    }

    onMounted(() => {
      syncWithScreen()
      window.addEventListener('resize', syncWithScreen)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', syncWithScreen)
    })

    return { navigation, mobileMenuOpen, contentOpen, toggle }
  }
}
</script>
