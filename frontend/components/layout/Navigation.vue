<template>
	<nav class="flex items-center justify-between flex-wrap content-end bg-blue-900 text-white p-3">
		<div class="flex-shrink-0 mb-1">
			<router-link :to="{ name: 'home' }">
				<span class="font-semibold text-xl tracking-tight"><i class="hashtag icon"></i>brewmap</span>
				<span class="ml-2 tracking-tight"><i class="at icon"></i> Krzysztof i Asia</span>
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
