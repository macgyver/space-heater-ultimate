<template>
	<dl class="legend">
		<dt class="legend__symbol">*</dt>
		<dd class="legend__meaning">Rookie</dd>

		<dt class="legend__symbol">**</dt>
		<dd class="legend__meaning">Captain</dd>
	</dl>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Legend extends Vue {}
</script>

<style>
.legend {
	margin-top: 0;
	display: inline-grid;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(2, auto);
}

.legend__symbol {
	text-align: right;
}

.legend__symbol::after {
	content: '=';
	margin: 0 0.3em;
}

.legend__meaning {
	display: inline;
	margin: 0;
}
</style>
