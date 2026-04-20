<template>
  <div class="h-screen flex bg-gray-50 overflow-hidden">
    <mobile-width-sidebar :navigation="navigation" :mobile-menu-open="mobileMenuOpen" @hide="mobileMenuOpen = false"></mobile-width-sidebar>
    <full-width-sidebar :navigation="navigation"></full-width-sidebar>

    <main class="flex-1 min-w-0 overflow-hidden flex flex-col-reverse lg:block lg:relative">
      <div class="absolute top-0 right-0 z-30 lg:hidden">
        <button type="button" class="m-3 h-12 w-12 inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-md text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open sidebar</span>
          <menu-icon class="h-6 w-6" aria-hidden="true"></menu-icon>
        </button>
      </div>

      <brewmap class="flex-1 lg:absolute lg:inset-0"></brewmap>

      <div class="h-3/4 order-first lg:order-none lg:absolute lg:top-4 lg:bottom-4 lg:left-4 lg:w-120 bg-white overflow-y-auto z-10 shadow-2xl lg:rounded-xl">
        <router-view></router-view>
        <div class="w-full">&nbsp;</div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
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
    const mobileMenuOpen = ref(false)
    const navigation = ref(navigationItems)

    return {
      navigation,
      mobileMenuOpen
    }
  }
}
</script>
