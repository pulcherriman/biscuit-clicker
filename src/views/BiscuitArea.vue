<template>
	<div class="flex flex-col items-center justify-evenly bg-yellow-50">
		<div class='w-full bg-slate-500 bg-opacity-40 flex flex-col items-center justify-evenly py-3'>
			<p class="text-xl py-5">{{bakeryName}}'s bakery</p>
			<p class="text-4xl py-1">
				<Number :value="Math.floor(saveData.biscuits)" /> biscuits
			</p>
			<p class="text-base py-1">
				per second: <Number :value="saveData.biscuitsPerSecond" :fixed=1 />
			</p>  
		</div>
		<div class="w-3/4">
			<img @click="biscuitIncrement" src="@/assets/click_biscuit.svg"/>
		</div>
	</div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import Number from "@/components/Number.vue";
import { useStatusStore } from '@/stores/status'
import { useIntervalFn } from '@vueuse/core'

const saveDataStore = useStatusStore();
const saveData = saveDataStore.saveData;

const biscuitIncrement = function(){
	saveData.biscuits+=saveData.biscuitsPerClick;
}

const interval = 100;
const bakeryName = "BigCrunch";
const { pause, resume, isActive } = useIntervalFn(()=>{
	saveData.biscuits += saveData.biscuitsPerSecond * interval / 1000;
}, interval);


</script>
