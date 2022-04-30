<template>
	<DefaultLayout >
		<NavBar  />
		<section class="px-4   md:px-8  flex flex-col w-full min-h-screen justify-start items-center bg py-10">
			<h1 class="text-3xl md:text-5xl font-bold text-white text-center">Tic Tac Toe</h1>

			<div class="flex flex-col max-w-full w-[18rem] mt-12">
				<router-link :to='`/games/tictactoe/${uuidv4()}`' class="btn w-full">
					Start Game
				</router-link>
				<button class="btn w-full mt-5">
					Join Game
				</button>
				<button class="btn w-full mt-5">
					How to play
				</button>
			</div>
		</section>
	</DefaultLayout>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import NavBar from '@/components/navigation/NavBar.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import { v4 as uuidv4 } from 'uuid'

const beforeEnter = (el) => {
	el.style.opacity = 0
	el.style.transform = 'translateY(100px)'
}
const enter = (el, done) => {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 0.5,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	})
}
</script>

<style scoped>

</style>