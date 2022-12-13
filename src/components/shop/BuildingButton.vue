<template>
	<div class="h-16 mx-1 mt-1">
		<button @click="buySingle" class="px-2 py-1 h-full w-full text-left" :disabled="isSatisfy">
			<div>
				<span class="text-2xl">
					{{ building.name }}
				</span>
				x{{ building.count }}
			</div>
			<div>
				<span class="text-lg" :class="isSatisfy ? 'text-red-500' : 'text-green-500'">
					<Number :value="Math.ceil(building.price)" />
				</span>
				biscuits
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
import type Building from "@/models/Building";
import Number from "@/components/Number.vue";

const props = defineProps<{
	building: Building,
	biscuits: Number
}>();

const emits = defineEmits<{
	(e: 'buySingle'): void
}>();

const buySingle = () => emits('buySingle');

const isSatisfy = computed(() => {
	return props.building.price > props.biscuits;
});
</script>
