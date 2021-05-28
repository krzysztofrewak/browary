<template>
  <div class="h-screen flex bg-gray-50 overflow-hidden">
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" static class="fixed inset-0 flex z-40 lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-4">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                </button>
              </div>
            </TransitionChild>

            <div class="pt-5 pb-4">
              <nav aria-label="Sidebar">
                <div class="px-2 space-y-1">
                  <router-link v-for="item in navigation" :key="item.route" :to="{ name: item.route }" class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                    <component :is="item.icon" class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true"/>
                    {{ item.name }}
                  </router-link>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-20">
        <div class="flex flex-col h-0 flex-1 overflow-y-auto bg-gradient-to-r from-black to-gray-900">
          <div class="flex-1 flex flex-col">
            <nav aria-label="Sidebar" class="py-6 flex flex-col items-center space-y-3">
              <router-link v-for="item in navigation" :key="item.route" :to="{ name: item.route }" class="flex items-center p-4 rounded-lg text-yellow-100 hover:bg-yellow-600" :title="item.name">
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
                <span class="sr-only">{{ item.name }}</span>
              </router-link>
            </nav>
          </div>
          <div class="flex-shrink-0 flex pb-3 text-white flex flex-col items-center">
            <a href="https://github.com/krzysztofrewak/browary" class="flex items-center p-4 rounded-lg text-yellow-100 hover:bg-yellow-600" title="Kod źródłowy" target="_blank">
              <CodeIcon class="h-6 w-6" aria-hidden="true"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <div class="lg:hidden">
        <div class="bg-yellow-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow"/>
          </div>
          <div>
            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-yellow-600 rounded-md text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="mobileMenuOpen = true">
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>

      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex flex-row-reverse xl:overflow-hidden">
          <Map></Map>

          <!-- Secondary column (hidden on smaller screens) -->
          <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first z-10 shadow-lg">
            <div class="h-full relative flex flex-col w-120 bg-white overflow-y-auto">
              <router-view></router-view>
              <div class="w-full">&nbsp;</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  CalendarIcon,
  CodeIcon,
  GlobeIcon,
  HomeIcon,
  MenuIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  TagIcon,
  TicketIcon,
  XIcon
} from '@heroicons/vue/outline'
import Map from './Map'

const navigation = [
  { name: 'Str. główna', route: 'home', icon: HomeIcon },
  { name: 'Kalendarz', route: 'calendar', icon: CalendarIcon },
  { name: 'Odwiedzone państwa', route: 'countries', icon: GlobeIcon },
  { name: 'Wycieczki', route: 'home', icon: TicketIcon },
  { name: 'Tagi browarów', route: 'home', icon: TagIcon },
  { name: 'O nas', route: 'about', icon: QuestionMarkCircleIcon },
  { name: 'Statystyki', route: 'home', icon: PresentationChartLineIcon }
]

export default {
  components: {
    Map,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    CodeIcon
  },
  setup () {
    const mobileMenuOpen = ref(false)

    return {
      navigation,
      mobileMenuOpen
    }
  }
}
</script>
