<template>
  <transition-root as="template" :show="mobileMenuOpen">
    <dialog-base as="div" static class="fixed inset-0 flex z-40 lg:hidden" @close="$emit('hide')" :open="mobileMenuOpen">
      <transition-child as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <dialog-overlay class="fixed inset-0 bg-gray-900 bg-opacity-75"></dialog-overlay>
      </transition-child>
      <transition-child as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
          <transition-child as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="absolute top-0 right-0 -mr-12 pt-4">
              <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="$emit('hide')">
                <span class="sr-only">Close sidebar</span>
                <x-icon class="h-6 w-6 text-white" aria-hidden="true"></x-icon>
              </button>
            </div>
          </transition-child>

          <div class="pt-5 pb-4">
            <nav aria-label="Sidebar">
              <div class="px-2 space-y-1">
                <router-link v-for="item in navigation" :key="item.route" :to="{ name: item.route }" class="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" @click="$emit('hide')">
                  <component :is="item.icon" class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true"></component>
                  {{ item.name }}
                </router-link>
              </div>
            </nav>
          </div>
        </div>
      </transition-child>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
      </div>
    </dialog-base>
  </transition-root>
</template>

<script>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    'dialog-base': Dialog,
    'dialog-overlay': DialogOverlay,
    'transition-child': TransitionChild,
    'transition-root': TransitionRoot,
    'x-icon': XIcon
  },
  props: {
    mobileMenuOpen: Boolean,
    navigation: Array
  }
}
</script>
