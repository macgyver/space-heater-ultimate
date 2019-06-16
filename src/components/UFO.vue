<template>
	<main class="roster" ref="roster">
		<header>
			<nav>
				<ol>
					<li>
						<a>dead link</a>
					</li>
					<li>
						<a>dead link</a>
					</li>
					<li>
						<a>dead link</a>
					</li>
				</ol>
			</nav>
			<img src="../assets/skulltrumpet.gif" />
			<h1>
				Space Heater <blink>Ultimate</blink>
				<br />
				<img src="../assets/redspacewebsite.gif" />
			</h1>
			<img src="../assets/skulltrumpet.gif" />
		</header>
		<marquee>Keeping things warm...</marquee>
		<section>
			<h1 class="roster-heading">2019 Roster</h1>
			<dl class="key">
				<dt class="key-symbol">*</dt>
				<dd class="key-meaning">Rookie</dd>

				<dt class="key-symbol">**</dt>
				<dd class="key-meaning">Captain</dd>
			</dl>

			<div class="player-list">
				<article v-for="p in players" :key="p.firstName + p.lastName">
					<h1 class="player-name">
						<span v-if="p.coach">Coach</span>
						{{ p.firstName }}
						{{ p.lastName }}
					</h1>
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
.ufo {
	position: absolute;
	/* z-index: -1; */
	top: 0;
	left: 0;
	max-width: 100%;
}
</style>
