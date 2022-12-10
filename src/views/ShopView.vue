<template>
	<div class="flex flex-1 flex-row justify-center m-2">
		<div class="flex flex-col flex-1 bg-red-100 h-full mr-1">
			<div  v-for="(building, i) in buildings" :key="building.name">
				<BuildingButton v-model:building="buildings[i]"/>
			</div>
		</div>
		<div class="flex flex-1 bg-yellow-100 ml-1">
			(強化)
		</div>
	</div>
</template>

<script setup lang="ts">
import BuildingButton from "@/components/shop/BuildingButton.vue";
import { ref } from "vue";
import { Buildings } from "@/models/Building";
const buildings = ref(Buildings);
</script>