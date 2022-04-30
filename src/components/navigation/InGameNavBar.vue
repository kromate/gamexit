<template>
	<nav class="relative z-30  select-none">
		<div
			class="container flex flex-wrap items-center justify-between py-5 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<router-link
				to="/"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
			>GAMEXIT.</router-link>

		



			<div class=" gap-4 ">
			
				<button
					class="btn-secondary"
					@click="share()"
				>
					share
				</button>
			
			</div>

		
		</div>
	</nav>
</template>

<script setup lang="ts">

import { useUser } from '../../composables/useGlobals'

const { user } = useUser()


</script>


