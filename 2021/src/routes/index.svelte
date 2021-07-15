<script context="module" lang="ts">
	export const prerender = true
</script>

<script lang="ts">
	import Roster from '$lib/roster/Roster.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div>
	<Roster />
</div>

<style>
</style>
