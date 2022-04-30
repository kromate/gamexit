<template>
	<page-loading/>
	<DefaultLayout >
		<InGameNavBar  />
		<section class="pt-8 text-center text-white">
			<h1 class="text-5xl font-extrabold">Tic Tac Toe</h1>


			<div class="flex items-center justify-center flex-col m-12">
				<div class="flex items-center justify-center" v-for="(row, x) in board"  :key="x">
					<input class="box btn p-0 m-0 " type="text" readonly v-for="(cell, y) in row"  :key="y" 
						@click="MakeMove($event, x, y)"  :disabled="disableAll" :value="cell">
				</div>
			</div>

			<h2 v-if="winner" class="text-3xl font-bold mb-8">{{result}}</h2>

			<button @click="ResetGame" class="btn mx-auto w-[22rem] max-w-[100%]" v-if="winner">Reset</button>

		</section>
	</DefaultLayout>
</template>


<script setup lang="ts">
import InGameNavBar from '@/components/navigation/InGameNavBar.vue'
import { useLoading } from '@/composables/useNotification'
import DefaultLayout from '@/layouts/defaultLayout.vue'

useLoading().openLoading('Setting things up')

import io from 'socket.io-client'
const socket = io('http://localhost:9000')
socket.on('connected', () => {
	useLoading().closeLoading()
	console.log('received index')

})
import { ref, computed } from 'vue'
const player = ref('X')
const disableAll = ref(false)
const result = ref('')


const board = ref([
	['', '', ''],
	['', '', ''],
	['', '', '']
])
const CalculateWinner = (board) => {
	const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			disableAll.value = true
			result.value = `Player ${ board[a] } wins!`
			return board[a]
		}
	}

	if(!board.includes('')){ 
		disableAll.value = true
		result.value = 'This Match ended in a draw'
		return true
	}
	return null
}
const winner = computed(() => CalculateWinner(board.value.flat()))
const MakeMove = (el, x, y) => {
	if (winner.value) return
	if (board.value[x][y]) return
	board.value[x][y] = player.value
	socket.emit('play', [x,y])
	el.target.disabled = true
	player.value = player.value === 'X' ? 'O' : 'X'
}
const ResetGame = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
	disableAll.value = false
	player.value = 'X'
}


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
    background-color: rgb(240, 240, 240);
}

.box:disabled {
    color: black;
    cursor: no-drop;
}

</style>