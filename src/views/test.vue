<template>
	<div class="pt-8 text-center">
		<h1 class="text-2xl">Tic Tac Toe</h1>


		<div class="flex items-center justify-center flex-col m-12">
			<div class="flex items-center justify-center" v-for="(row, x) in board"  :key="x">
				<input class="box btn p-0 m-0" type="text" readonly v-for="(cell, y) in row"  :key="y" 
					@click="MakeMove($event, x, y)"  :disabled="disableAll" :value="cell">
			</div>
		</div>

		<h2 v-if="winner" class="text-3xl font-bold mb-8">Player '{{ winner }}' wins!</h2>

		<span @click="ResetGame" class="btn" v-if="winner">Reset</span>

	</div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
const player = ref('X')
const disableAll = ref(false)


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
			return board[a]
		}
	}
	return null
}
const winner = computed(() => CalculateWinner(board.value.flat()))
const MakeMove = (el, x, y) => {
	if (winner.value) return
	if (board.value[x][y]) return
	board.value[x][y] = player.value
	el.target.disabled = true
	player.value = player.value === 'X' ? 'O' : 'X'
}
const ResetGame = () => {
	board.value = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
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
    color: black;
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