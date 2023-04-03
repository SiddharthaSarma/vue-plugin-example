<script setup>
import { onMounted, ref } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
defineProps({
  text: { type: String, required: true },
});
const input = ref(null);
onMounted(() => {
  tippy(input.value, {
    content: "I'm a Tippy tooltip!",
  });
});
</script>
<template>
  <span ref="input">Hi there {{ text }}</span>
</template>
