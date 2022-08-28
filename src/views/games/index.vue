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
					v-for="(n, index) in games"
					:key="n"
					:data-index="index"
					class="overflow-hidden flex flex-col justify-center items-center hover:scale-[1.01]
					 rounded-md shadow-md  bg-white w-[22rem]  max-w-[100%]  gradient-border"
				>
					<img :src="n.img" class="w-60 mt-2">

					<p class="text-center font-medium text-2xl">TicTacToe</p>
					
					<router-link :to="n.link"	class="btn w-9/12 mb-7 m-5 cursor-pointer"	>Play</router-link>
					

				</div>
			</transition-group>

		</section>
	</DefaultLayout>

</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import NavBar from '@/components/navigation/NavBar.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import {GameList} from '@/composables/useGames'

import { ref, onMounted } from 'vue'

const games = ref()
onMounted(async () => {
	games.value = await GameList()
})



const beforeEnter = (el) => {
	el.style.opacity = 0
	el.style.transform = 'translateY(100px)'
}
const enter = (el, done) => {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 0.35,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	})
}
</script>

<style scoped>
.gradient-border:before {
    background-size: 400% auto;
    border-radius: 6px;
    bottom: 0;
    content: "";
    left: 0;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 1;
    padding: 8px;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-position .3s ease-in-out,opacity .2s ease-in-out;
    width: 100%;
	z-index: -100;
	   animation: hue 1.5s infinite linear;
}

.gradient-border:before {
    background:  -webkit-linear-gradient(245.29deg, #6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%);
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
  }
}
</style>