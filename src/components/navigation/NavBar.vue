<template>
	<nav class="relative z-30  select-none">
		<div
			class="container flex flex-wrap items-center justify-between py-5 px-4 mx-auto md:flex-row "
		>
			<router-link
				to="/"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
			>
				GAMEXIT.
			</router-link>

			<div
				class="flex flex-col items-center justify-center p-3 bg-white border-2 text-primary
				 border-primary rounded-full cursor-pointer mobile text-lg"
				@click="showMenu = !showMenu"
			>
				<i v-if="!showMenu" class="las la-bars " />
				<i v-else class="las la-times" />
			</div>

			<transition name="slideUp">
				<div v-if="showMenu" class="w-full gap-4 absolute bg-[#ffffff1f] shadow-2xl top-20 inset-x-0 p-4">
					<router-link
						to="/games"
						class="btn rounded-none py-3 w-full"
					>
						Games
					</router-link>
					<button
						class="btn rounded-none py-3 w-full mt-2"
						@click="user ? signOut() : googleSignin()"
					>
						{{ user ? "Log Out" : "Sign in" }}
					</button>
				</div>
			</transition>

			<div class=" gap-4 pc">
				<router-link
					v-if="user"
					to="/games"
					class="btn pc"
				>
					Games
				</router-link>
				<button
					class="btn-secondary pc"
					@click="user ? signOut() : googleSignin()"
				>
					{{ user ? "Log Out" : "Sign in" }}
				</button>
				<button
					v-if="!user"
					class="btn pc"
					@click="user ? signOut() : googleSignin()"
				>
					{{ user ? "Log Out" : "Create Account" }}
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '@/composables/useGlobals'
import { useSignin } from '@/composables/auth/auth'

const { googleSignin, signOut } = useSignin()

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
