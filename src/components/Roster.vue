<template>
	<main class="roster">
		<img src="../assets/computer.gif" />
		<img src="../assets/floppy.gif" />
		<img src="../assets/flashinglight.gif" height="50" width="50" />
		<img src="../assets/spaceshuttle.gif" />

		<section>
			<h1 class="roster-heading">2019 Roster</h1>
			<Legend legend="legend" />

			<ul class="roster__players">
				<li v-for="(p, i) in players" :key="'p' + i">
					<Player v-bind="p" />
				</li>

				<h1 class="roster__heading">Team Friends</h1>
				<li v-for="(f, i) in friends" :key="'f' + i">
					<Player v-bind="f" />
				</li>
			</ul>
		</section>

		<UFO />
	</main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Legend from './Legend.vue'
import Player from './Player.vue'
import UFO from './UFO.vue'

@Component({
	components: {
		Legend,
		Player,
		UFO,
	},
})
export default class Roster extends Vue {
	legend = {
		'*': 'Rookie',
		'**': 'Captain',
	}

	players = [
		{
			firstName: 'Ella',
			lastName: 'Juengst',
			imageFile: 'ella.jpg',
			rookie: true,
		},
		{
			firstName: 'Theresa',
			lastName: 'Hackett',
			imageFile: 'hackett.jpg',
			rookie: true,
		},
		{
			firstName: 'Pete',
			lastName: 'MacArthur',
			imageFile: 'pete.jpg',
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
			imageFile: 'ryan.jpg',
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
			imageFile: 'beau.jpg',
			rookie: true,
		},
		{
			firstName: 'Ashley',
			lastName: 'Sylvester',
			imageFile: 'ashley.jpg',
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
			imageFile: 'jonny.jpg',
		},
		{
			firstName: 'Georgia',
			lastName: 'Bosscher',
			imageFile: 'georgia.jpg',
		},
		{
			firstName: 'Anthony',
			lastName: 'McLean',
			imageFile: 'anthony.jpg',
		},
		{
			firstName: 'Alan',
			lastName: 'Kolick',
			imageFile: 'alan.jpg',
			captain: true,
		},
		{
			firstName: 'Kat',
			lastName: 'Sanz',
			imageFile: 'kat.jpg',
		},
		{
			firstName: 'Erik',
			lastName: 'Salmi',
			imageFile: 'salmi.jpg',
		},
		{
			firstName: 'Jenny',
			lastName: 'Fey',
			imageFile: 'jenny.jpg',
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
	]
		.map(player => {
			return {
				...player,
				key: Math.floor(Math.random() * 1000),
			}
		})
		.sort(function(a, b) {
			return a.key - b.key
		})

	friends = [
		{
			firstName: 'Ty',
			lastName: 'Aderhold',
			imageFile: 'ty.jpg',
			coach: true,
		},
		{
			firstName: 'Ryan',
			lastName: 'Nam',
			imageFile: 'nam.jpg',
			practice: true,
		},
		{
			firstName: 'Ryan',
			lastName: 'Thornton',
			imageFile: 'rt.jpg',
			practice: true,
		},
	]
}
</script>

<style>
/* .roster {
} */

.roster__players {
	display: grid;
	gap: calc(var(--gutter-size) / 2);
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	padding: 0;
}

.roster__heading {
	margin-bottom: 0;
	grid-column: 1 / -1;
}
</style>
