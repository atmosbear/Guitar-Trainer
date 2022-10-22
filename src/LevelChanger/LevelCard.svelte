<script>
	import RippleExample from "./RippleExample.svelte";
	export let level;
	export let ripples;
</script>

<div class="card">
	<p class="card-title">Level {level}</p>
	<!-- <RippleExample {ripples} /> -->
</div>

<style>
	.card {
		background-color: rgb(39, 34, 34);
		padding: 1rem;
		margin: 2rem;
		width: 25%;
		height: 20%;
		border-radius: 1rem;
	}
	.card-title {
		font-size: 3rem;
		padding: 0;
		margin: 0;
	}
</style>
