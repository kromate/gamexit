<template>
	<div class="pt-8 text-center">
		<div class="header">
			<h1 class="text-2xl">Tic Tac Toe</h1>
		</div>

		<div class="box">
			<div class="row" v-for="row in 3" :key="row">
				<input class="btn p-0 m-0" type="text" readonly v-for="(col,i) in 3" :key="col" @click="ticTacToe($event, (row+col))" :disabled="disableAll">
			</div>
		</div>

		<p class="result">{{result}}</p>

		<div class="reset">
			<button id="reset">Reset</button>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

let cells = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
  
const result = ref('')
const disableAll = ref(false)

const conditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const ticTacToe = (element, index) => {
	console.log(index)
	element.target.value = currentPlayer
	element.target.disabled = true
	cells[index] = currentPlayer
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
	result.value = `Player ${currentPlayer} Turn`

	for (let i = 0; i < conditions.length; i++) {
		const condition = conditions[i]
		const a = cells[condition[0]]
		const b = cells[condition[1]]
		const c = cells[condition[2]]

		if (a == '' || b == '' || c == '') {
			continue
		}

		if ((a == b) && (b == c)) {
			result.value = `Player ${a} Won 🎉`
			disableAll.value = true
		}
	}
}
  
  	function reset() {
	cells = ['', '', '', '', '', '', '', '', '']

	currentPlayer = 'X'
	result.value = 'Player X Turn'
	disableAll.value = false
}


</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@400;500;600;700&display=swap');


.box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 35px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    border: 1px solid black;
    border-radius: 5px;
    height: 75px;
    margin: 2px;
    width: 75px;
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    @apply shadow-lg;
}

.btn:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
}

.btn:disabled {
    color: black;
    cursor: no-drop;
}

.result {
    text-align: center;
}

.reset {
    text-align: center;
}

#reset {
    border: 1px solid black;
    cursor: pointer;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 17px;
    margin: 35px;
    transition: all 0.1s ease-in-out;
}

#reset:hover {
    color: white;
    background-color: black;
}
</style>