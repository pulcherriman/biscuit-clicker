<template>
	<div class="flex flex-1 flex-row justify-center m-2">
		<div class="flex flex-col flex-1 bg-red-100 h-full mr-1">
			<Buildings />
		</div>
		<div class="flex flex-col flex-1 bg-yellow-100 h-full mr-1">
			<!-- <Upgrades /> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import Buildings from "@/views/shop/Buildings.vue";
import Upgrades from "@/views/shop/Upgrades.vue";

</script>