<script lang="ts">
	import logo from './space-heater.png'
</script>

<header>
	<img src={logo} width="196" height="196" alt="" />
	<h1>Space Heater</h1>
	<h2>Elite Mixed Club Ultimate Team</h2>
	<h3>Washington, DC</h3>

	<nav>
		<ul>
			<li><a href="https://twitter.com/spaceheaterulti/">Twitter 🐦</a></li>
			<li><a href="https://spaceheaterultimate.com/2019/">2019 team</a></li>
		</ul>

		<!-- <img src={logo} alt="SvelteKit" />
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul> -->
	</nav>
	<hr size="3" />
</header>

<style>
	img {
		float: right;
		max-width: 25%;
		height: auto;
		padding: 10px;
		background: white;
		border: 1px solid var(--fg-color);
	}
</style>
