<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div>
		<RouterLink to="/">Home</RouterLink>
		|
		<RouterLink to="/settings">Settings</RouterLink>

		<RouterView />
	</div>
</template>

<style scoped>

</style>
