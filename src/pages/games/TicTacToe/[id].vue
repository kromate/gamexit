<template>
	<section class="pt-8 text-center text-white transition-all duration-500 relative">
		<h1 class="text-5xl font-extrabold">
			Tic Tac Toe
		</h1>
		<div v-if="!winner" class="flex justify-center items-center relative mt-12">
			<p v-if="globalGameState.player.value" class="badge bg-primary ">
				it's {{ globalGameState.disableAll.value? 'Your Opponent':'Your' }} turn to play
			</p>
		</div>

		<p v-if="!globalGameState.hasGameStarted.value" class="text-xl text-center mt-9">
			Waiting for Another player to join
		</p>
		<div class="flex items-center justify-center flex-col m-12">
			<div v-for="(row, x) in board" :key="x" class="flex items-center justify-center">
				<input
					v-for="(cell, y) in row"
					:key="y"
					class="box btn p-0 m-0 "
					type="text"
					readonly
					:disabled="globalGameState.disableAll.value"
					:value="cell"
					@click="MakeMove(x, y)"
				>
			</div>
		</div>

		<h2 v-if="winner" class="text-3xl font-bold mb-8">
			{{ globalGameState.result }}
		</h2>
		<div v-if="winner" class="flex flex-col justify-center items-center w-[22rem] mx-auto  max-w-[100%]">
			<!-- <p>To play again both players need to reload the browser, reload button comming soon.</p> -->
			<button class="btn w-[22rem] max-w-[100%] bg-gray-500 mt-4" @click="playRematch">
				Rematch
			</button>
		</div>

		<div class="absolute badge bg-primary top-0 right-4 flex flex-col gap-4 !px-1 py-3 text-[28px] opacity-50 hover:opacity-100">
			<i class="las la-volume-up" />
			<!-- <i class="las la-volume-mute"></i> -->
			<i class="las la-microphone" />
			<!-- <i class="las la-microphone-slash"></i> -->
			<i class="las la-cog" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import pageLoading from '@/components/core/PageLoading.vue'
import { globalGameState, board, winner, connectSocket, MakeMove, playRematch } from '@/composables/games/tictactoe/useGameplay'
import { enableReload, disableReload } from '@/composables/useUtils'

definePageMeta({
	layout: 'ingame'
})
onMounted(() => {
	disableReload()
	connectSocket()
})
onUnmounted(enableReload)

</script>

<style scoped>
.box {
    border: 1px solid black;
    border-radius: 5px;
    height: 75px;
    margin: 2px;
    width: 75px;
    text-align: center;
    font-size: 50px;
    font-weight: 500;
}

.box:hover {
    cursor: pointer;
    background-color: rgb(45, 7, 99);
}

.box:disabled {
    color: black;
    cursor: no-drop;
}

</style>
