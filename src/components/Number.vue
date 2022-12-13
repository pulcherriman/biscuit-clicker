<template>
	<span>
		{{ formattedValue }}
	</span>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
const props = defineProps<{
	value: number,
	fixed?: number
}>();

const formattedValue = computed(() => {
	if (props.value < 1e16) {
		return props.value.toFixed(props.fixed ?? 0);
	} else {
		return props.value.toExponential(3);
	}
});
</script>
