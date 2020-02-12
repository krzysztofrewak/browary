<template>
	<nav class="flex items-center justify-between flex-wrap content-end bg-blue-900 text-white px-3 py-2">
		<div class="text-2xl mr-3">
			<router-link :to="{ name: 'home' }">
				<i class="compass outline icon"></i>
			</router-link>
		</div>
		<div class="flex-shrink-0 mr-8">
			<router-link class="flex relative" :to="{ name: 'home' }">
				<span class="font-semibold mb-4 -mt-1 text-xl tracking-tight">Zwiedzanie browarów</span>
				<span class="absolute bottom-0">przez państwo Rewaków</span>
			</router-link>
		</div>
		<div class="w-full block flex-grow lg:flex lg:justify-end lg:w-auto">
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'home' }">wszystkie browary</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'calendar' }">kalendarz</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'trips' }">wycieczki</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'countries' }">państwa</router-link>
			<a class="block lg:inline-block ml-4" href="#">miasta</a>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'notes' }">notatki</router-link>
			<router-link class="block lg:inline-block ml-4" :to="{ name: 'statistics' }">statystyki</router-link>
		</div>
	</nav>
</template>
