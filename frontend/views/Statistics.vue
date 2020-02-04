<template>
	<div>
		<section class="w-full mb-6">
			<h2 class="text-xl text-blue-900 leading-none">Podsumowanie tygodniowe</h2>
			<h2 class="mb-2 text-gray-600">Popularność wybranych dni tygodnia</h2>
			<div class="flex w-full text-center">
				<div class="flex-1 m-2">
					<div class="bg-gray-600 p-2">2</div>
					<div class="text-sm text-gray-600">pn</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">wt</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-100 p-2">2</div>
					<div class="text-sm text-gray-600">śr</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">cz</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">pt</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-600 p-2">2</div>
					<div class="text-sm text-gray-600">sb</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-700 p-2">2</div>
					<div class="text-sm text-gray-600">nd</div>
				</div>
			</div>
		</section>
		<hr>

		<section class="w-full my-6">
			<h2 class="text-xl text-blue-900 leading-none">Podsumowanie miesięczne</h2>
			<h2 class="mb-2 text-gray-600">Popularność wybranych miesięcy</h2>
			<div class="flex w-full text-center">
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">I</div>
					<div class="bg-gray-600 p-2">2</div>
				</div>
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">II</div>
					<div class="bg-gray-400 p-2">2</div>
				</div>
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">III</div>
					<div class="bg-gray-400 p-2">2</div>
				</div>
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">IV</div>
					<div class="bg-gray-200 p-2">0</div>
				</div>
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">V</div>
					<div class="bg-gray-300 p-2">2</div>
				</div>
				<div class="flex-1 m-2">
					<div class="text-sm text-gray-600">VI</div>
					<div class="bg-gray-600 p-2">2</div>
				</div>
			</div>
			<div class="flex w-full text-center">
				<div class="flex-1 m-2">
					<div class="bg-gray-600 p-2">2</div>
					<div class="text-sm text-gray-600">VII</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">VIII</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-100 p-2">2</div>
					<div class="text-sm text-gray-600">IX</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">X</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-400 p-2">2</div>
					<div class="text-sm text-gray-600">XI</div>
				</div>
				<div class="flex-1 m-2">
					<div class="bg-gray-600 p-2">2</div>
					<div class="text-sm text-gray-600">XII</div>
				</div>
			</div>
		</section>
		<hr>

		<section class="w-full my-6">
			<h2 class="text-xl text-blue-900 leading-none">Najdalej wysunięte browary</h2>
			<h2 class="mb-4 text-gray-600">Ekstremalne współrzędne dla każdego kierunku</h2>
			<div class="flex flex-col w-full items-center text-center">
				<div class="flex h-24 w-full items-center text-center">
					<div class="flex-1"></div>
					<div class="flex-1">
						<i class="is huge flat flag"></i>
						<br>
						Ægisgarður
					</div>
					<div class="flex-1"></div>
				</div>
				<div class="flex h-24 w-full items-center text-center">
					<div class="flex-1">
						<i class="is huge flat flag"></i>
						<br>
						Bryggjan Brugghús
					</div>
					<div class="flex-1 mb-4 text-gray-400">
						<i class="huge compass outline icon"></i>
					</div>
					<div class="flex-1">
						<i class="ua huge flat flag"></i>
						<br>
						To Dublin
					</div>
				</div>
				<div class="flex h-24 w-full items-center text-center">
					<div class="flex-1"></div>
					<div class="flex-1">
						<i class="gr huge flat flag"></i>
						<br>
						Κρητική Ζυθοποιία
					</div>
					<div class="flex-1"></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import PageHeader from "../components/PageHeader"

	export default {
		components: {
			PageHeader,
		},
	}
</script>