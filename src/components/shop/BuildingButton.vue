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
import type Building from "@/models/Building";
const props = defineProps<{
	building: Building
}>();
</script>
