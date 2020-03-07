<template>
	<nav class="flex items-center justify-between flex-wrap content-end bg-blue-900 text-white p-3">
		<div class="flex-shrink-0 mb-1">
			<router-link class="flex text-xl items-end" :to="{ name: 'home' }">
				<span class="font-semibold ">Odwiedzone browary</span>
				<span class="ml-2">Krzysztofa i Joanny</span>
			</router-link>
		</div>
		<div class="w-full block flex-grow lg:flex lg:justify-end lg:w-auto">
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'about' }">o nas</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'breweries' }">wszystkie browary</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'calendar' }">kalendarz</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'trips' }">wycieczki</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'countries' }">państwa</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'tags' }">tagi</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'notes' }">notatki</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'statistics' }">statystyki</router-link>
		</div>
	</nav>
</template>
