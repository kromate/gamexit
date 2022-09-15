<template>
	<section class="px-4 py-28  md:px-8 bg-transparent w-full container items-center  mx-auto">
		<div class="flex flex-wrap-reverse items-center sm:-mx-3 justify-between">
			<div class="w-full md:w-1/2 md:px-3">
				<div
					class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0 select-none"
				>
					<h1
						class="w-auto md:w-[35rem] text-4xl font-extrabold py-4 tracking-tight !leading-[0.95] text-blue sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl gradient"
					>
						Have Fun With Friends Gaming
					</h1>
					<p
						class="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl md:!leading-8"
					>
						Gamexit is a platform focused on connecting people using games played on the web. Create a 1v1 or tournament challenge and invite your friends
					</p>

					<router-linkd
						to="/games"
						class="flex items-center w-fit px-6 py-3 text-primary bg-white rounded-full font-medium hover:bg-primary hover:text-white"
					>
						Get Started for Free
					</router-linkd>
				</div>
			</div>
			<div class="w-full md:w-1/2  relative flex justify-center items-center p-6 mx-auto">
				<img
					src="@/assets/images/hero1.png"
					class="absolute top-0 md:left-[25%]  floatT "
				>
				<img
					src="@/assets/images/hero2.png"
					class="absolute top-[-50px]  right-[-50px] md:top-0  md:right-0 xl:right-[15%]  floatT"
				>
				<img
					src="@/assets/images/hero3.png"
					class="absolute bottom-0 md:right-[20%] xl:right-[30%] floatB "
				>
				<img
					src="@/assets/images/hero4.png"
					class="absolute bottom-[-30px] left-[-100px] md:left-[-20px] xl:left-[10%] floatB md:bottom-0"
				>

				<img
					src="@/assets/images/hero.png"
					class="w-[24rem] "
				>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import NavBar from '@/components/navigation/NavBar.vue'

definePageMeta({
	layout: 'default'

})
</script>

<style>
.gradient {
 font-size: 67px;
  background: -webkit-linear-gradient(245.29deg, #6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    animation: hue 1.5s infinite linear;
}
/* .gradient:hover{

} */
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
    -webkit-filter: hue-rotate(360deg);
  }
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
