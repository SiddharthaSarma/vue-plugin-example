<script setup>
import { onMounted, onUpdated, ref } from "vue";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
const props = defineProps({
  text: { type: String, required: true },
});
const input = ref(null);
let tippyInstance = null;
const setUpTippy = () => {
  if (tippyInstance) {
    tippyInstance = null;
  }
  tippyInstance = tippy(input.value, {
    content: props.text,
  });
}
onMounted(() => {
  setUpTippy();
});
onUpdated(() => {
  setUpTippy();
})
</script>
<template>
  <span ref="input">Hi there {{ text }}</span>
</template>
