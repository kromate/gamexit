<template>
  <PageLoading />
  <Alert />
  <slot />
</template>

<script lang="ts" setup>
import PageLoading from "@/components/core/PageLoading.vue";
import Alert from "@/components/core/Alert.vue";
</script>

<style scoped></style>
