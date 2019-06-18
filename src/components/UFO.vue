<template>
	<aside>
		<link rel="prefetch" href="../assets/ufo.gif" />
		<img
			:style="style"
			class="img"
			src="../assets/ufo.gif"
			ref="img"
			v-if="show"
		/>
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
		zIndex: '0',
	}
	// ufo = document.createElement('img')

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

			// todo: vary the z-index so it appears behind the pictures sometimes??
			this.style = {
				top: `${top}px`,
				left: `${left}px`,
				height: `${size}px`,
				width: `${size}px`,
				transform: `rotate(${rot}deg) scaleX(${flip})`,
				zIndex: `${randint(1) ? 0 : -1}`,
			}
			console.debug('ufo', { ...this.style })

			// const $img = this.$refs.img as HTMLImageElement

			setTimeout((ts: number) => {
				this.show = false
				this.schedule()
			}, 2000)
		}, delay * 1000)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
	position: absolute;
	/* z-index: -1; */
	top: 0;
	left: 0;
	max-width: 100vw;
	max-height: 100vw;
	pointer-events: none;
}
</style>
