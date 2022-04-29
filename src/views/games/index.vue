<template>
	<DefaultLayout >
		<NavBar  />
		<section class="px-4   md:px-8  flex flex-col w-full min-h-screen justify-start items-center bg py-10">
			<p class="text-3xl md:text-5xl font-bold text-white text-center">Select a Game below</p>

			
			<transition-group
				appear
				class="gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12"
				@before-enter="beforeEnter"
				@enter="enter"
				tag="div"
			>
				<div
					v-for="(n, index) in 10"
					:key="n"
					:data-index="index"
					class="overflow-hidden flex flex-col justify-center items-center hover:scale-[1.01]
					 rounded-md shadow-md  bg-white w-[22rem]  max-w-[100%] border-4 border-blue"
				>
					<img src="../../../games/TicTacToe/image.png" class="w-60">

					<p class="text-center font-medium text-2xl">TicTacToe</p>
					
					<button	class="btn w-9/12 mb-7 m-5"	>Play</button>
					

				</div>
			</transition-group>

		</section>
	</DefaultLayout>

</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import NavBar from '@/components/NavBar.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'

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