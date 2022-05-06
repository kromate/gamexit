<template>
	<DefaultLayout >
		<InGameNavBar  />
		<section class="pt-8 text-center text-white transition-all duration-500">
			<h1 class="text-5xl font-extrabold">Tic Tac Toe</h1>
			<div class="flex justify-center items-center relative mt-12" v-if="!winner">
				<p v-if="globalGameState.player.value" class="badge bg-primary ">it's {{globalGameState.disableAll.value? 'Your Opponent':'Your'}} turn to play</p>
			</div>
			
			<p class="text-xl text-center mt-9" v-if="!globalGameState.hasGameStarted.value">Waiting for Another player to join</p>
			<div class="flex items-center justify-center flex-col m-12">
				<div class="flex items-center justify-center" v-for="(row, x) in board"  :key="x">
					<input class="box btn p-0 m-0 " type="text" readonly v-for="(cell, y) in row"  :key="y" 
						@click="MakeMove(x, y)"  :disabled="globalGameState.disableAll.value" :value="cell">
				</div>
			</div>

			<h2 v-if="winner" class="text-3xl font-bold mb-8" >{{globalGameState.result}}</h2>
			<div class="flex flex-col justify-center items-center w-[22rem] mx-auto  max-w-[100%]" v-if="winner">
				<!-- <p>To play again both players need to reload the browser, reload button comming soon.</p> -->
				<button @click="playRematch" class="btn w-[22rem] max-w-[100%] bg-gray-500 mt-4" >Rematch</button>
			</div>
			

		</section>
	</DefaultLayout>
</template>


<script setup lang="ts">
import InGameNavBar from '@/components/navigation/InGameNavBar.vue'
import pageLoading from '@/components/core/PageLoading.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import { onMounted } from 'vue'
import {globalGameState, board, winner, connectSocket, MakeMove, playRematch} from '@/composables/games/tictactoe/useGameplay'

onMounted(connectSocket)







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