<template>
	<div class="grid grid-cols-5">
		<div v-for="(upgrade, i) in unboughtUpgrades" :key="i">
			<UpgradeButton 
				:saveData="saveData"
				:upgrade="upgrade"
				@buy="buy(upgrade.id)"
				/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useStatusStore } from '@/stores/status';
import UpgradeButton from '@/components/shop/UpgradeButton.vue';
import { watch } from 'vue';

const saveDataStore = useStatusStore();
const saveData = saveDataStore.saveData;

watch(saveData, () => {
	saveData.upgrades.filter((upgrade) => {
		return upgrade.isVisible === false;
	}).forEach((upgrade) => {
		if (upgrade.isAvailable(saveData)) {
			upgrade.isVisible = true;
		}
	});
});

const buy = function (id: number) {
	saveData.biscuits -= saveData.upgrades[id].getPrice(saveData);
	saveData.upgrades[id].isBought = true;
};

const unboughtUpgrades = computed(() => {
	return saveData.upgrades.filter((upgrade) => {
		return upgrade.isBought === false;
	});
});

</script>