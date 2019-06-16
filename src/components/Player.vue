<template>
	<article :id="id" class="player" ref="el">
		<h1 class="player-name">
			<span v-if="coach">Coach</span>
			{{ firstName }}
			{{ lastName }}
			<span v-if="rookie">*</span>
			<span v-if="captain">**</span>
		</h1>
		<a :href="'#' + id">
			<img class="img" :src="getPlayerImgSrc(imageFile)" />
		</a>
	</article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

function randint(max: number, min = 0) {
	return Math.floor(Math.random() * Math.floor(max - min)) + min
}

@Component
export default class Player extends Vue {
	@Prop() private firstName!: string
	@Prop() private lastName!: string
	@Prop() private imageFile!: string
	@Prop() private coach!: boolean
	@Prop() private captain!: boolean
	@Prop() private rookie!: boolean

	mounted() {
		if (`#${this.id}` === location.hash) {
			// i feel like it's a safe bet that window.load has never happened when this component first mounts,
			// but if I'm wrong it's no big deal, we just lose the scroll-jump-fixing
			window.addEventListener('load', () => {
				const $el = this.$refs.el as HTMLElement
				$el.scrollIntoView()
			})
		}
	}

	get id() {
		return this.imageFile.split('.')[0]
	}

	getPlayerImgSrc(file: string) {
		const images = require.context('../assets/', false)
		return images('./' + file)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player:target {
	outline: 0.3em double cyan;
}

.img {
	width: 100%;
}
</style>
