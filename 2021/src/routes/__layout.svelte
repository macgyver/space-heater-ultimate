<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import '../app.css'

	function handleSubmit(e) {
		alert('There is no e-mail list')
		e.preventDefault()
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer size="-1">
	<form on:submit={handleSubmit}>
		<fieldset>
			<legend>Space Heater E-Mail List</legend>
			<label>
				Enter your e-mail address
				<input />
			</label>
			<input type="submit" />
		</fieldset>
	</form>
	last updated 20210712 11:08:30Z
</footer>

<style>
	footer {
		margin-top: 3em;
	}
</style>
