<template>
	<div class="h-16 mx-1 mt-1 px-2 py-1 bg-white">
		<div>
			<span class="text-2xl">
				{{ building.name }}
			</span>
			<span class="text-l">
				x{{ building.count }}
			</span>
		</div>
		<div>
			<span class="text-xl">
				{{ building.price }} <span class="text-l">biscuit</span>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps  } from 'vue';
const props = defineProps<{
	building: {
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		production: {
			type: Number,
			required: true,
		},
	}
}>();
</script>
