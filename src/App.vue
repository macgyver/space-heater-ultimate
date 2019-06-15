<template>
	<div id="space-heater">
		<Roster />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Roster from './components/Roster.vue'

@Component({
	components: {
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
}
</style>
