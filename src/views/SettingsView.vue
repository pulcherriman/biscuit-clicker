<template>
	セーブ
	<button @click="saveDataStore.saveToLocalStorage" class="bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2">セーブ</button>
	リセット
	<button @click="saveDataStore.hardReset" class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2">リセット</button>
</template>

<script setup lang="ts">

import { useStatusStore } from '@/stores/status'
const saveDataStore = useStatusStore();

</script>
