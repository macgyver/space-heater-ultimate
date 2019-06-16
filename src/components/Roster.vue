<template>
	<main class="roster" ref="roster">
		<header>
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
			<img src="../assets/skulltrumpet.gif" />
			<h1>
				Space Heater <blink>Ultimate</blink>
				<br />
				<img src="../assets/redspacewebsite.gif" />
			</h1>
			<img src="../assets/skulltrumpet.gif" />
			<img src="../assets/lightning.gif" class="lightning" />
		</header>
		<marquee>Keeping things warm...</marquee>
		<img src="../assets/computer.gif" />
		<img src="../assets/floppy.gif" />
		<img src="../assets/flashinglight.gif" height="50" width="50" />
		<img src="../assets/spaceshuttle.gif" />

		<section>
			<h1 class="roster-heading">2019 Roster</h1>
			<dl class="key">
				<dt class="key-symbol">*</dt>
				<dd class="key-meaning">Rookie</dd>

				<dt class="key-symbol">**</dt>
				<dd class="key-meaning">Captain</dd>
			</dl>

			<ul class="player-list">
				<li v-for="p in players" :key="p.firstName + p.lastName">
					<Player v-bind="p" />
				</li>
			</ul>

			<img src="../assets/flames.gif" />
			<img src="../assets/flames.gif" />
			<img src="../assets/flames.gif" />
		</section>

		<UFO />
	</main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Player from './Player.vue'
import UFO from './UFO.vue'

@Component({
	components: {
		Player,
		UFO,
	},
})
export default class Roster extends Vue {
	@Prop() private msg!: string

	coaches = [
		{
			firstName: 'Ty',
			lastName: 'Aderhold',
		},
	]

	// todo: randomize order, insert gifs
	players = [
		{
			firstName: 'Ty',
			lastName: 'Aderhold',
			imageFile: 'ty.png',
			coach: true,
		},
		{
			firstName: 'Ella',
			lastName: 'Juengst',
			imageFile: 'ella.png',
			rookie: true,
		},
		{
			firstName: 'Theresa',
			lastName: 'Hackett',
			imageFile: 'hackett.png',
			rookie: true,
		},
		{
			firstName: 'Pete',
			lastName: 'MacArthur',
			imageFile: 'pete.png',
			rookie: true,
		},
		{
			firstName: 'Sydney',
			lastName: 'Rehder',
			imageFile: 'sydney.jpg',
			rookie: true,
		},
		{
			firstName: 'Clea',
			lastName: 'Poklemba',
			imageFile: 'clea.jpg',
			rookie: true,
		},
		{
			firstName: 'Megan',
			lastName: 'McVey',
			imageFile: 'mcvey.jpg',
			rookie: true,
		},
		{
			firstName: 'Ryan',
			lastName: 'Cooper',
			imageFile: 'ryan.png',
			rookie: true,
		},
		{
			firstName: 'Mia',
			lastName: 'Greenwald',
			imageFile: 'meeee.jpg',
			rookie: true,
		},
		{
			firstName: 'Hannah',
			lastName: 'Boone',
			imageFile: 'hannah.jpg',
			rookie: true,
		},
		{
			firstName: 'Gabe',
			lastName: 'Westergren',
			imageFile: 'gabe.jpg',
			rookie: true,
		},
		{
			firstName: 'Beau',
			lastName: 'De Koninck',
			imageFile: 'beau.png',
			rookie: true,
		},
		{
			firstName: 'Ashley',
			lastName: 'Sylvester',
			imageFile: 'ashley.png',
			rookie: true,
		},
		{
			firstName: 'David “Duke”',
			lastName: 'Boylan-Kolchin',
			imageFile: 'duke.jpg',
		},
		{
			firstName: 'Sandy',
			lastName: 'Jorgensen',
			imageFile: 'sandy.jpg',
		},
		{
			firstName: 'Kelly “Beezus”',
			lastName: 'Hyland',
			imageFile: 'beezus.jpg',
		},
		{
			firstName: 'Cody',
			lastName: 'Johnston',
			imageFile: 'cody.jpg',
		},
		{
			firstName: 'Jonny',
			lastName: 'Malks',
			imageFile: 'jonny.png',
		},
		{
			firstName: 'Georgia',
			lastName: 'Bosscher',
			imageFile: 'georgia.png',
		},
		{
			firstName: 'Anthony',
			lastName: 'McLean',
			imageFile: 'anthony.png',
		},
		{
			firstName: 'Alan',
			lastName: 'Kolick',
			imageFile: 'alan.png',
			captain: true,
		},
		{
			firstName: 'Kat',
			lastName: 'Sanz',
			imageFile: 'kat.png',
		},
		{
			firstName: 'Erik',
			lastName: 'Salmi',
			imageFile: 'salmi.jpg',
		},
		{
			firstName: 'Jenny',
			lastName: 'Fey',
			imageFile: 'jenny.png',
			captain: true,
		},
		{
			firstName: 'Pat',
			lastName: 'Shriwise',
			imageFile: 'pat.jpg',
		},
		{
			firstName: 'Zach',
			lastName: 'Norrbom',
			imageFile: 'zach.jpg',
		},
		{
			firstName: 'Kyle',
			lastName: 'Khalifa',
			imageFile: 'kyle.jpg',
		},
	].sort(function() {
		return 0.5 - Math.random()
	})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.roster {
	text-align: center;
	color: orange;
	--gutter-size: 2em;
}

header {
	display: inline-flex;
	align-items: center;
	margin: 0 auto;
	font-family: 'Comic Sans MS', 'Comic Sans', cursive;
	color: yellow;
	position: static; /* so the nav is relative to the document */
}

h1 {
	flex-shrink: 0;
	margin: 1em;
}

[src*='skulltrumpet']:not(:first-of-type) {
	transform: scaleX(-1);
	max-width: 100%;
}

.player-image {
	width: 100%;
}

.player-list {
	display: grid;
	gap: var(--gutter-size);
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.player-name {
	font-weight: normal;
	font-size: 1em;
	background: purple;
	display: inline;
}

main {
	padding: 4em;
	background-image: url('../assets/stars.jpg');
}

/* @media (prefers-color-scheme: light) {
	main {
		background-image: url('../assets/circuitboard.jpg')
	}

	header {
		color: darkblue;
	}
} */

blink {
	animation: blink 1s steps(5, start) infinite;
}
@keyframes blink {
	to {
		visibility: hidden;
	}
}

.key {
	margin-top: 0;
	display: inline-grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(2, auto);
}

.key-symbol {
	text-align: right;
}

.key-symbol::after {
	content: '=';
	margin: 0 0.3em;
}

.key-meaning {
	display: inline;
	margin: 0;
}

.roster-heading {
	margin-bottom: 0;
}

marquee {
	font-style: italic;
	font-family: 'Arial Black', Gadget, sans-serif;
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

.lightning {
	position: absolute;
	right: 0;
}
</style>
