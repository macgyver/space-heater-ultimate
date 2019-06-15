<template>
	<main class="roster" ref="roster">
		<header>
			<img src="../assets/skulltrumpet.gif" />
			<h1>
				Space Heater <blink>Ultimate</blink>
				<br />
				<img src="../assets/redspacewebsite.gif" />
			</h1>
			<img src="../assets/skulltrumpet.gif" />
		</header>
		<marquee>This text will appear as a marquee</marquee>
		<section>
			<h1>2019 Roster</h1>
			<div class="player-list">
				<article v-for="p in players" :key="p.firstName + p.lastName">
					<h1 class="player-name">{{ p.firstName }} {{ p.lastName }}</h1>
					<img class="player-image" :src="getPlayerImgSrc(p.imageFile)" />
				</article>
			</div>
		</section>

		<img
			width="400"
			height="400"
			class="ufo"
			src="../assets/transparentufo.gif"
			ref="ufo"
			v-if="showUfo"
		/>
	</main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

function randint(max: number, min = 0) {
	return Math.floor(Math.random() * Math.floor(max - min)) + min
}

@Component
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
			firstName: 'Ella',
			lastName: 'Juengst',
			imageFile: 'ella.png',
		},
		{
			firstName: 'Theresa',
			lastName: 'Hackett',
			imageFile: 'hackett.png',
		},
		{
			firstName: 'Pete',
			lastName: 'MacArthur',
			imageFile: 'pete.png',
		},
		{
			firstName: 'Sydney',
			lastName: 'Rehder',
			imageFile: 'sydney.jpg',
		},
		{
			firstName: 'Clea',
			lastName: 'Poklemba',
			imageFile: 'clea.jpg',
		},
		{
			firstName: 'Megan',
			lastName: 'McVey',
			imageFile: 'mcvey.jpg',
		},
		{
			firstName: 'Ryan',
			lastName: 'Cooper',
			imageFile: 'ryan.png',
		},
		{
			firstName: 'Mia',
			lastName: 'Greenwald',
			imageFile: 'meeee.jpg',
		},
		{
			firstName: 'Hannah',
			lastName: 'Boone',
			imageFile: 'hannah.jpg',
		},
		{
			firstName: 'Gabe',
			lastName: 'Westergren',
			imageFile: 'gabe.jpg',
		},
		{
			firstName: 'Beau',
			lastName: 'De Koninck',
			imageFile: 'beau.png',
		},
		{
			firstName: 'Ashley',
			lastName: 'Sylvester',
			imageFile: 'ashley.png',
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

	getPlayerImgSrc(file: string) {
		const images = require.context('../assets/', false)
		return images('./' + file)
	}

	ufo = document.createElement('img')
	showUfo = false

	async mounted() {
		const imagesContext = require.context('../assets/', false)
		const url = await imagesContext('./transparentufo.gif')
		console.log('mounted', url, this.ufo)
		this.ufo.src = url
		if (this.ufo.complete) {
			this.scheduleUfo()
		} else {
			this.ufo.addEventListener('load', _e => {
				this.scheduleUfo()
			})
		}
	}

	scheduleUfo() {
		const delay = randint(30, 10)
		console.log('scheduling ufo', this.ufo, delay)

		// this.$refs.ufo.setAttribute('hidden', false)

		setTimeout((ts: number) => {
			this.showUfo = true

			Vue.nextTick(() => {
				// todo: make top/bottom/left/right somewhat random (maybe just flip between left and right side?)
				// also vary the z-index
				const x = 100
				const y = 100
				const $ufo = this.$refs.ufo as HTMLElement
				$ufo.style.top = `${x}px`
				$ufo.style.left = `${y}px`
				console.debug('adding ufo', $ufo, x, y, ts)

				// const roster = this.$refs.roster as HTMLElement
				// roster.appendChild(this.ufo)

				setTimeout((ts: number) => {
					// console.log('removing ufo', ts)
					// this.ufo.remove()
					this.showUfo = false
					this.scheduleUfo()
				}, 2000) // todo: tweak this to the duration of the gif?
			})
		}, delay * 1000)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roster {
	text-align: center;
}

header {
	display: inline-flex;
	align-items: center;
	margin: 0 auto;
	font-family: 'Comic Sans MS', 'Comic Sans', cursive;
	color: yellow;
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
	gap: 2em;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.ufo {
	position: absolute;
	top: 0;
	left: 0;
	max-width: 100%;
}
</style>
