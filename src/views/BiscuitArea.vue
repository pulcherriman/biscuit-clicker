<template>
	<div class="flex flex-col items-center justify-evenly bg-yellow-50">
		<p class="text-4xl">{{ saveData.biscuits }} biscuit</p>
		<div class="w-3/4">
			<img @click="biscuitIncrement" src="@/assets/click_biscuit.svg"/>
		</div>
	</div>
</template>

<style scoped>

</style>

<script setup lang="ts">

import { useStatusStore } from '@/stores/status'
const saveDataStore = useStatusStore();
const saveData = saveDataStore.saveData;

const biscuitIncrement = function(){
	saveData.biscuits++;

}

</script>
