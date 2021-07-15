<template>
	<aside class="ufo">
		<link rel="prefetch" href="../assets/ufo.gif" />
		<img :style="style" class="ufo__img" src="../assets/ufo.gif" v-if="show" />
	</aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

function randint(max: number, min = 0) {
	return Math.floor(Math.random() * Math.floor(max - min + 1)) + min
}

@Component
export default class UFO extends Vue {
	minDelay = 10
	maxDelay = 20
	show = false
	style = {
		height: '400px',
		width: '400px',
		top: '0',
		left: '0',
		transform: '',
		zIndex: '1',
		maxWidth: '100vw',
		maxHeight: '100vw',
	}

	async mounted() {
		this.schedule()
	}

	schedule() {
		const delay = randint(this.maxDelay, this.minDelay)

		setTimeout((ts: number) => {
			this.show = true

			const size = randint(
				Math.min(800, document.documentElement.clientWidth),
				100,
			)
			const top = randint(
				window.scrollY + document.documentElement.clientHeight - size,
				window.scrollY,
			)
			const left = randint(
				window.scrollX + document.documentElement.clientWidth - size,
				window.scrollX,
			)
			const rot = randint(45, -45)
			const flip = randint(1) ? 1 : -1

			// prevent rotated corners from overflowing the container
			// todo: could eke out a few more pixels if we use the rot value to figure out the actual size,
			//       this is just the max it could possibly be, i.e. when rotated a multiple of 45°
			const hypot = Math.hypot(size, size)

			this.style = {
				top: `${top}px`,
				left: `${left}px`,
				height: `${size}px`,
				width: `${size}px`,
				transform: `rotate(${rot}deg) scaleX(${flip})`,
				zIndex: `${randint(2) > 0 ? 1 : 0}`, // appear before the players mostly, but sometimes behind
				maxHeight: `${hypot}px`,
				maxWidth: `${hypot}px`,
			}
			// console.debug('ufo', { ...this.style })

			setTimeout((ts: number) => {
				this.show = false
				this.schedule()
			}, 2000)
		}, delay * 1000)
	}
}
</script>

<style>
.ufo__img {
	position: absolute;
	pointer-events: none;
}
</style>
