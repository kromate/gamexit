<template>
	<section class="relative w-full px-8 text-white bg-transparent" >
		<div
			class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
		>
			<a
				href="#_"
				class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none"
			>GAMEXIT.</a
			>

			<nav class="flex items-center justify-center w-auto h-full text-base">
				<router-link to="/" class="mr-5 relative font-medium hover:text-blue ">
					<span class="block">Home</span>
				</router-link>
				<router-link to="/#about" class="mr-5 relative font-medium hover:text-blue ">
					<span class="block">About</span>
				</router-link>
				<router-link to="/#feature" class="mr-5 relative font-medium hover:text-blue ">
					<span class="block">Features</span>
				</router-link>
		
			</nav>

			<div class="flex items-center">
				<button
					to=""
					class="mr-4 inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-6 bg-white text-primary rounded-full"
				>
					Sign in
				</button>

				<button
					to=""
					class=" flex items-center justify-center px-6 py-2 text-base font-medium leading-6 text-white bg-primary rounded-full"
				>
					Create Account
				</button>
			</div>
		</div>
	</section>
</template>


<style>

</style>