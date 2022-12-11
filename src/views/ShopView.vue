<template>
	<div class="flex flex-1 flex-row justify-center m-2">
		<div class="flex flex-col flex-1 bg-red-100 h-full mr-1">
			<div  v-for="(building, i) in saveData.buildings" :key="building.name">
				<BuildingButton 
					:building="saveData.buildings[i]"
					:biscuits="saveData.biscuits"
					@buySingle="buySingle(saveData.buildings[i].id)" />
			</div>
		</div>
		<div class="flex flex-1 bg-yellow-100 ml-1">
			(強化)
		</div>
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