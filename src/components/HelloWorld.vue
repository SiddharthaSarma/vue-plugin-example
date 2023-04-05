<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <span>Hi there <Tooltip :text="msg" /></span>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
