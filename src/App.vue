<template>
	<div id="space-heater">
		<Header />
		<Roster />
		<footer>
			<img src="./assets/flames.gif" />
			<img src="./assets/flames.gif" />
			<img src="./assets/flames.gif" />
			<br />
			<img src="./assets/counter.gif" />
			<img src="./assets/ns_logo.gif" />
			<img src="./assets/ie_logo.gif" />
			<img src="./assets/noframes.gif" />
			<img src="./assets/notepad.gif" />
		</footer>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Roster from './components/Roster.vue'

@Component({
	components: {
		Header,
		Roster,
	},
})
export default class App extends Vue {}
</script>

<style>
body {
	margin: 0;
}

#space-heater {
	--gutter-size: 4em;
	padding: var(--gutter-size);
	background-image: url('./assets/stars.jpg');
	text-align: center;
	color: orange;
}

@media (max-width: 768px) {
	#space-heater {
		--gutter-size: 2em;
	}
}

/* @media (prefers-color-scheme: light) {
	#space-heater {
		background-image: url('../assets/circuitboard.jpg')
		color: darkblue;
	}
} */
</style>
