<template>
	<div v-for="(building, i) in saveData.buildings" :key="i">
		<BuildingButton 
			:building="building"
			:biscuits="saveData.biscuits"
			@buySingle="buySingle(building.id)" />
	</div>
</template>

<script setup lang="ts">
import BuildingButton from "@/components/shop/BuildingButton.vue";
import { useStatusStore } from '@/stores/status';

const saveDataStore = useStatusStore();
const saveData = saveDataStore.saveData;

const buySingle = function (id: number) {
	saveData.biscuits -= saveData.buildings[id].price;
	saveData.buildings[id].count += 1;
};
</script>