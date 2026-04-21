<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-20">
      <div class="flex flex-col h-0 flex-1 overflow-y-auto bg-zinc-900">
        <div class="flex-1 flex flex-col">
          <nav aria-label="sidebar" class="py-6 flex flex-col items-center space-y-3">
            <router-link v-for="item in navigation" :key="item.route" :to="{ name: item.route }" class="flex items-center p-4 rounded-lg text-yellow-100 hover:bg-zinc-600" :class="{ 'bg-zinc-700': $route.meta.section === item.section }" :title="item.name">
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
              <span class="sr-only">{{ item.name }}</span>
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex pb-3 text-white flex flex-col items-center">
          <a href="https://github.com/krzysztofrewak/browary" class="flex items-center p-4 rounded-lg text-yellow-100 hover:bg-yellow-600" title="Kod źródłowy" target="_blank">
            <icon-code class="h-6 w-6" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconCode } from '@tabler/icons-vue'

export default {
  components: {
    IconCode
  },
  props: {
    navigation: Array
  }
}
</script>
