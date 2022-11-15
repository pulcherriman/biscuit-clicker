<template>
	<div class="bg-blue-50">
		<div class="flex flex-row justify-center">
			<RouterLink to="/" class="flex-1 text-2xl text-center underline py-2">
				アップグレード
			</RouterLink>
			<RouterLink to="/settings" class="flex-1 text-2xl text-center underline py-2">
				設定
			</RouterLink>
		</div>

		<div class="m-2">
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
	a:not(.router-link-active) {
		background-color: rgba(32, 32, 32, 0.5);
	}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

