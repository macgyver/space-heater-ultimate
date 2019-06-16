<template>
	<article :id="id" class="player">
		<h1 class="player-name">
			<span v-if="coach">Coach</span>
			{{ firstName }}
			{{ lastName }}
			<span v-if="rookie">*</span>
			<span v-if="captain">**</span>
		</h1>
		<a :href="'#' + id">
			<img class="player-image" :src="getPlayerImgSrc(imageFile)" />
		</a>
	</article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

function randint(max: number, min = 0) {
	return Math.floor(Math.random() * Math.floor(max - min)) + min
}

@Component
export default class UFO extends Vue {
	@Prop() private firstName!: string
	@Prop() private lastName!: string
	@Prop() private imageFile!: string
	@Prop() private coach!: boolean
	@Prop() private captain!: boolean
	@Prop() private rookie!: boolean

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
	outline: 0.5em double cyan;
}

.img {
	position: absolute;
	/* z-index: -1; */
	top: 0;
	left: 0;
	max-width: 100%;
}
</style>
