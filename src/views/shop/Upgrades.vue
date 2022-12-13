<template>
	<div class="grid grid-cols-5">
		<div v-for="(upgrade, i) in visibleUpgrades" :key="i">
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

const saveDataStore = useStatusStore();
const saveData = saveDataStore.saveData;

const buy = function (id: number) {
	saveData.biscuits -= saveData.upgrades[id].getPrice(saveData);
	saveData.upgrades[id].isBought = true;
};

const visibleUpgrades = computed(() => {
	return saveData.upgrades.filter((upgrade) => {
		return upgrade.isBought === false && upgrade.isAvailable(saveData);
	});
});

</script>