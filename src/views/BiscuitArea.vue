<template>
	<div class="flex flex-col items-center justify-evenly bg-yellow-50">
		<p class="text-4xl">{{ currentAllBiscuits }} biscuit</p>
		<div class="w-3/4">
			<img @click="biscuitIncrement" src="@/assets/click_biscuit.svg"/>
		</div>
	</div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { ref } from 'vue';

const currentAllBiscuits = ref(0);

const biscuitIncrement = function(){
	currentAllBiscuits.value++;
}

</script>
