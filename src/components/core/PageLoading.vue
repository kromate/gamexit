<template>
	<transition name="fade" appear>
		<div class="flex min-h-screen items-center justify-center flex-col bg-[#ffffffc0] fixed z-50 inset-0" v-if="active">
			<div class=" flex">
				<div class="dash uno"></div>
				<div class="dash dos"></div>
				<div class="dash tres"></div>
				<div class="dash cuatro"></div>
			</div>

			<p class="text-2xl absolute mt-40 text-center max-w-[45rem] px-4">{{ message }}</p>
		</div>
	
	</transition>
</template>

<script lang="ts" setup>
import { useLoading } from '../../composables/useNotification'
const { active, message } = useLoading()
</script>


<style scoped>


.dash {
  margin: 0 15px;
  width: 35px;
  height: 15px;
  border-radius: 8px;
  background: #8C72FF;

}

.uno {
  margin-right: -18px;
  transform-origin: center left;
  animation: spin 3s linear infinite;  
}

.dos {
  transform-origin: center right;
  animation: spin2 3s linear infinite;
  animation-delay: .2s;
}

.tres {
  transform-origin: center right;
  animation: spin3 3s linear infinite;
  animation-delay: .3s;
}

.cuatro {
  transform-origin: center right;
  animation: spin4 3s linear infinite;
  animation-delay: .4s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  30% {
    transform: rotate(370deg);
  }
  35% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-180deg);
  }
  35% {
    transform: rotate(-190deg);
  }
  40% {
    transform: rotate(-180deg);
  }
  78% {
    transform: rotate(-180deg);
  }
  95% {
    transform: rotate(-360deg);
  }
  98% {
    transform: rotate(-370deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes spin3 {
  0% {
    transform: rotate(0deg);
  }
  27% {
    transform: rotate(0deg);  
  }
  40% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(190deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  80% {
    transform: rotate(370deg);
  }
  85% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin4 {
  0% {
    transform: rotate(0deg);
  }
  38% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(-360deg);
  }
  65% {
    transform: rotate(-370deg);
  }
  75% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>