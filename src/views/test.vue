<template>
	<div>Test</div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'
import {io} from 'socket.io-client'

  const connectSocket = async () => {
    const socket = await socketService
      .connect("http://localhost:9000")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

onMounted(connectSocket)
</script>

<style  scoped>

</style>