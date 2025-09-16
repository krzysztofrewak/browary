<template>
  <div class="h-screen flex bg-gray-50 overflow-hidden">
    <mobile-width-sidebar :navigation="navigation" :mobile-menu-open="mobileMenuOpen" @hide="mobileMenuOpen = false"></mobile-width-sidebar>
    <full-width-sidebar :navigation="navigation"></full-width-sidebar>

    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <div class="absolute top-0 right-0 z-20 lg:hidden">
        <button type="button" class="m-3 h-12 w-12 inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-md text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open sidebar</span>
          <menu-icon class="h-6 w-6" aria-hidden="true"></menu-icon>
        </button>
      </div>

      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex flex-col-reverse lg:flex-row lg:overflow-hidden">
          <brewmap class="flex-1 h-1/2 lg:flex-auto lg:flex-grow lg:h-full"></brewmap>
          <div class="flex-1 h-1/2 lg:h-full lg:flex-none block order-first z-10 shadow-lg">
            <div class="h-full relative flex flex-col w-full lg:w-120 bg-white overflow-hidden overflow-y-auto">
              <router-view></router-view>
              <div class="w-full">&nbsp;</div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
