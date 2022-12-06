<template>
	<div class="flex flex-1 flex-col m-2">
		<h1 class="text-xl my-1">
			セーブデータ管理
		</h1>
		<div class="flex flex-row justify-around">
			<button @click="saveDataStore.saveToLocalStorage" class="bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2">セーブ</button>
			<button @click="saveDataStore.hardReset" class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2">リセット</button>
		</div>
	</div>
</template>

<script setup lang="ts">

import { useStatusStore } from '@/stores/status'
const saveDataStore = useStatusStore();

</script>
