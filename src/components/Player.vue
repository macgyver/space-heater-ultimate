<template>
	<article :id="id" class="player" ref="el">
		<img src="../assets/hot.gif" class="player__hot" hidden />
		<h1 class="player__name">
			<span v-if="coach">Coach</span>
			{{ firstName }}
			{{ lastName }}
			<span v-if="rookie">*</span>
			<span v-if="captain">**</span>
		</h1>
		<img src="../assets/hot.gif" class="player__hot" hidden />
		<a :href="'#' + id">
			<img class="player__img" :src="getPlayerImgSrc(imageFile)" />
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

<style>
.player {
	position: relative;
	z-index: 1; /* this is the max z-index the ufo will take, and the ufo appears after the players in DOM order */
}

.player:target {
	outline: 0.3em double cyan;
}

.player__hot {
	vertical-align: middle;
}

.player:target > .player__hot {
	display: initial;
}

.player__name {
	display: inline;
	background: purple;
	font-weight: normal;
}

.player:hover > .player__name,
.player:focus > .player__name {
	font-weight: bold;
}

.player__img {
	width: 100%;
	max-width: calc(100vw - 2 * var(--gutter-size));
}
</style>
