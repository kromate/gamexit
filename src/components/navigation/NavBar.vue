<template>
	<nav class="relative z-30  select-none">
		<div
			class="container flex flex-wrap items-center justify-between py-5 px-4 mx-auto md:flex-row "
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


			<transition name="slideUp">
				<div v-if="showMenu" class="w-full gap-4 absolute bg-[#ffffff1f] shadow-2xl top-20 inset-x-0 p-4">
					<router-link
						to="/games"
						class="btn rounded-none py-3 w-full"
					>Games</router-link
					>
					<button
						class="btn rounded-none py-3 w-full mt-2"
						@click="user ? signOutUser() : googleAuth()"
					>
						{{ user ? "Log Out" : "Sign in" }}
					</button>
				</div>
			</transition>

			<div class=" gap-4 pc">
				<router-link to="/games" class="btn pc" v-if="user"
				>Games</router-link
				>
				<button
					class="btn-secondary pc"
					@click="user ? signOutUser() : googleAuth()"
				>
					{{ user ? "Log Out" : "Sign in" }}
				</button>
				<button
					v-if="!user"
					class="btn pc"
					@click="user ? signOutUser() : googleAuth()"
				>
					{{ user ? "Log Out" : "Create Account" }}
				</button>
			</div>

		
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { googleAuth, signOutUser } from '../../firebase/auth'
import { useUser } from '../../composables/useGlobals'

const { user } = useUser()

const showMenu = ref(false)
</script>

<style scoped>
.slideUp-enter-from,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.35s ease;
}
</style>
