<template>
	<div class="bg-dark min-h-screen overflow-hidden ">
		<PageLoading />
		<Alert />
		<slot />
	</div>

</template>

<script lang="ts" setup>
import PageLoading from '@/components/core/PageLoading.vue'
import Alert from '@/components/core/Alert.vue'
import {onMounted} from '@vue/runtime-core'

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

<style scoped></style>
