<template>
	<aside>
		<link rel="prefetch" href="../assets/ufo.gif" />
		<img
			width="400"
			height="400"
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
	return Math.floor(Math.random() * Math.floor(max - min)) + min
}

@Component
export default class UFO extends Vue {
	show = false
	// ufo = document.createElement('img')

	async mounted() {
		this.schedule()
	}

	schedule() {
		const delay = randint(30, 10)

		setTimeout((ts: number) => {
			this.show = true

			Vue.nextTick(() => {
				// todo: make top/bottom/left/right somewhat random (maybe just flip between left and right side?)
				// also vary the z-index
				const x = 100
				const y = 100
				const $img = this.$refs.img as HTMLImageElement
				$img.style.top = `${x}px`
				$img.style.left = `${y}px`
				console.debug('adding img', $img, x, y, ts)

				setTimeout((ts: number) => {
					this.show = false
					this.schedule()
				}, 2000)
			})
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
	max-width: 100%;
}
</style>
