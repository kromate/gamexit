<template>
	<nav class="relative z-30  select-none">
		<div
			class="container flex flex-wrap items-center justify-between py-5 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<router-link
				to="/"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
			>GAMEXIT.</router-link>

			<div
				@click="showMenu = !showMenu"
				class="flex flex-col items-center justify-center p-3 bg-white border-2 text-primary
				 border-primary rounded-full cursor-pointer mobile text-lg"
			>
				<i class="las la-bars " 	v-if="!showMenu"></i>
				<i class="las la-times" v-else></i>
			</div>



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
import { ref } from '@vue/reactivity'
import { googleAuth, signOutUser } from '../../firebase/auth'
import { useUser } from '../../composables/useGlobals'

const { user } = useUser()

const showMenu = ref(false)
</script>


