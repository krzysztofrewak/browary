<template>
  <nav class="flex items-center justify-between flex-wrap content-end bg-blue-900 text-white p-3">
    <div class="flex-shrink-0 mb-1">
      <router-link :to="{ name: 'breweries' }" class="flex text-xl items-end">
        <span class="font-semibold ">Odwiedzone browary</span>
        <span class="ml-2">Krzysztofa i Joanny</span>
      </router-link>
    </div>
    <div class="hidden w-full lg:block flex-grow lg:flex lg:justify-end lg:w-auto">
      <router-link :to="{ name: 'about' }" class="block ml-4">o nas</router-link>
      <router-link :to="{ name: 'breweries' }" class="block ml-4">wszystkie browary</router-link>
      <router-link :to="{ name: 'calendar' }" class="block ml-4">kalendarz</router-link>
      <router-link :to="{ name: 'trips' }" class="block ml-4">wycieczki</router-link>
      <router-link :to="{ name: 'countries' }" class="block ml-4">państwa</router-link>
      <router-link :to="{ name: 'tags' }" class="block ml-4">tagi</router-link>
      <router-link :to="{ name: 'notes' }" class="block ml-4">notatki</router-link>
      <router-link :to="{ name: 'statistics' }" class="block ml-4">statystyki</router-link>
    </div>
  </nav>
</template>
