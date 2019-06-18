<template>
	<header>
		<div role="banner">
			<nav>
				<ul>
					<li>
						<a href="team.html">Team Bio</a>
					</li>
					<li>
						<a href="schedule.html">Tournament Schedule</a>
					</li>
					<li>
						<a href="archives.html">Roster Archives</a>
					</li>
					<li>
						<a href="listserv.html">Join our mailing list!</a>
					</li>
				</ul>
			</nav>
			<img src="../assets/doot.gif" />
			<h1>
				Space Heater <blink>Ultimate</blink>
				<br />
				<img src="../assets/redspacewebsite.gif" />
			</h1>
			<img src="../assets/doot.gif" />
			<img src="../assets/lightning.gif" class="lightning" />
		</div>
		<marquee>Keeping things warm...</marquee>
	</header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped>
[role='banner'] {
	display: inline-flex;
	align-items: center;
	margin: 0 auto;
	font-family: 'Comic Sans MS', 'Comic Sans', cursive;
	color: yellow;
	/* position: static; << implied, but left here to enforce that the contained nav should be relative to the document */
}

h1 {
	/* flex-shrink: 0; */
	margin: 1em;
}

[src*='doot']:not(:first-of-type) {
	transform: scaleX(-1);
	max-width: 100%;
}

nav {
	color: fuchsia;
	flex: none;
	margin-right: 1em;
	position: absolute;
	left: var(--gutter-size);
	white-space: nowrap;
	text-align: left;
}

nav a {
	color: inherit;
}

nav a:visited {
	color: blue;
}

.lightning {
	position: absolute;
	right: 0;
}

@media (max-width: 768px) {
	[role='banner'] {
		flex-wrap: wrap;
		justify-content: center;
	}

	nav {
		transform: translateY(-100%);
	}

	.lightning {
		transform: translateY(100%);
	}
}

blink {
	animation: blink 1s steps(5, start) infinite;
}
@keyframes blink {
	to {
		visibility: hidden;
	}
}

marquee {
	font-style: italic;
	font-family: 'Arial Black', Gadget, sans-serif;
	width: 100vw;
	margin-left: calc(50% - 50vw);
	margin-right: calc(50% - 50vw);
}
</style>
