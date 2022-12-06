<template>
	<div class="flex flex-1 flex-row justify-center m-2">
		<div class="flex flex-col flex-1 bg-red-100 h-full mr-1">
			<BuildingButton v-for="i in 5" :key="i" v-model:building="buildingModel"/>
		</div>
		<div class="flex flex-1 bg-yellow-100 ml-1">
			(強化)
		</div>
	</div>
</template>

<script setup lang="ts">
import BuildingButton from "@/components/shop/BuildingButton.vue";
import { ref } from "vue";
const buildingModel = ref({
	name: "test",
	price: 100,
	count: 123,
	production: 10,
});
</script>