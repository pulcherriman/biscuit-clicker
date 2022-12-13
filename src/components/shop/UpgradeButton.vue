<template>
	<div class="h-16 mx-1 mt-1">
		<button @click="buy" class="h-full w-full" :disabled="isSatisfy">
			<div>
				icon
			</div>
		</button>
	</div>
</template>

<style scoped>
button {
	background-color: white;
	border: 1px solid #edf2f7;
	border-radius: 0.25rem;
}
button:disabled {
	background-color: rgba(128, 128, 128, 0.5);
	color: rgba(0, 0, 0, 0.5);
}
</style>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import type Upgrade from "@/models/Upgrade";
// import Number from "@/components/Number.vue";

const props = defineProps<{
	upgrade: Upgrade,
	biscuits: Number
}>();

const emits = defineEmits<{
	(e: 'buy'): void
}>();

const buy = () => emits('buy');

const isSatisfy = computed(() => {
	return props.upgrade.price > props.biscuits;
});
</script>
