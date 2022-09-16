<template>
	<div class="bg-dark min-h-screen overflow-hidden ">
		<InGameNavBar />
		<PageLoading />
		<Alert />
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core'
import PageLoading from '@/components/core/PageLoading.vue'
import Alert from '@/components/core/Alert.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import InGameNavBar from '@/components/navigation/InGameNavBar.vue'

onMounted(() => {
	const gradient = document.querySelector<HTMLElement>('.grad')
	if (gradient) {
		const onMouseMove = (event) => {
		gradient!.style.backgroundImage = 'radial-gradient(at ' + event!.clientX +
		'px ' + event!.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 100%)'
		}
		document.addEventListener('mousemove', onMouseMove)
	}
})
</script>

<style scoped></style>
