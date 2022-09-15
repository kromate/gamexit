<template>
	<nav class="relative z-30  select-none">
		<div
			class="container flex flex-wrap items-center justify-between py-5 px-4 mx-auto md:flex-row max-w-7xl"
		>
			<router-link to="/"	class="relative flex items-center w-auto text-xl font-extrabold tracking-widest text-blue select-none">
				GAMEXIT.
			</router-link>

			<div class=" gap-4 ">
				<button	class="btn-secondary" @click="shareGame()">
					share
				</button>
			
			</div>

		
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useAlert } from '@/composables/useNotification'
import { useShare, useClipboard } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// console.log(`${location.href}/`)

const source = ref('')
const { copy } = useClipboard({ source })
const { share, isSupported } = useShare()

const copyLink = () => {
	source.value = location.href
	copy()
	useAlert().openAlert(
		'Seems something went wrong while trying to share, don\'t worry we copied it to your clipboard '
	)
}
	
const shareGame = () => {

	if (!isSupported) {
		copyLink()
	}
	try {
		share({
			title: 'Gamexit',
			text:'Play A Game on Gamexit',
			url: location.href,
		})
	} catch {
		copyLink()
	}
}

</script>


