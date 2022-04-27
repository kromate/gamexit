<template>
	<DefaultLayout class="bg-dark min-h-screen overflow-hidden ">
		<NavBar  />
		<section class="px-4 py-32  md:px-8 bg-transparent ">
			<div class="container items-center  mx-auto">
				<div class="flex flex-wrap-reverse items-center sm:-mx-3 justify-between">
					<div class="w-full md:w-1/2 md:px-3">
						<div
							class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
						>
							<h1
								class="w-auto md:w-[35rem] text-4xl font-extrabold py-4 tracking-tight !leading-[0.95] text-blue sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl gradient"
							>
								Have Fun With Friends Gaming
							</h1> 
							<p
								class="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl md:!leading-8"
							>
								Gamexit is a platform focused on connecting people using games play on the web. Create a 1v1 or tournament challenge and invite your friends
							</p>
							<div class="relative flex flex-col sm:flex-row sm:space-x-4">
						
								<a
									href="#_"
									class="flex items-center px-6 py-3 text-primary bg-white rounded-full font-medium hover:bg-primary hover:text-white"
								>
									Get Started for Free 
								</a>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/2  relative flex justify-center items-center p-6 mx-auto">
					
						<img
							src="../assets/images/hero1.svg"
							class="absolute top-0 left-[-20px] floatT"
						/>
						<img
							src="../assets/images/hero2.svg"
							class="absolute top-0  right-[-24px] object-contain floatT"
						/>
						<img
							src="../assets/images/hero3.svg"
							class="absolute bottom-0 right-[-24px] floatB"
						/>
						<img
							src="../assets/images/hero4.svg"
							class="absolute bottom-0 left-[-20px] floatB"
						/>

						<img
							src="../assets/images/hero.svg"
							class="w-[24rem] "
						/>

					</div>
				</div>
			</div>
		</section>

	</DefaultLayout>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'
import NavBar from '@/components/NavBar.vue'
import DefaultLayout from '../layouts/defaultLayout.vue'

onMounted(()=>{
	const gradient = document.querySelector<HTMLElement>('.grad')
	if(gradient){
		const onMouseMove = (event)=> {
		gradient!.style.backgroundImage = 'radial-gradient(at ' + event!.clientX + 
		'px ' + event!.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 100%)'
		}
		document.addEventListener('mousemove', onMouseMove)
	}

})


</script>

<style >
.gradient {
 font-size: 67px;
  background: -webkit-linear-gradient(245.29deg, #6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

}
.gradient:hover{
  animation: hue 1s infinite linear;
}
.delay{

}
.floatT{
	  animation: floatA 4.5s infinite linear;
}
.floatB{
	  animation: floatB 4.5s  infinite linear;
	 animation-direction: alternate, reverse, normal;
}
@keyframes floatA {
	0% {transform: translatey(0px)}
	50% {transform: translatey(-30px)}
	100% {transform: translatey(0px)}
}
@keyframes floatB {
	0% {transform: translatey(-30px)}
	50% {transform: translatey(0px)}
	100% {transform: translatey(-30px)}
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
