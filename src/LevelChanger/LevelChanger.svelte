<script>
	import { fade } from "svelte/transition";
	import { screenStore } from "../Game/ScreenStore";
	import LevelCard from "./LevelCard.svelte";
	import { ripplesPerLevel } from "../Game/Game";
	let ripplesInLevel = [];
	for (let i = 1; i <= 9; i++) {
		if (ripplesPerLevel[i - 1] !== undefined) {
			ripplesInLevel.push([...ripplesPerLevel[i - 1]]);
		}
	}
	console.log(ripplesInLevel);
</script>

<div
	id="blackBox"
	on:click={() => screenStore.set("game")}
	transition:fade={{ duration: 100 }}
/>
<div
	id="centerBox"
	in:fade={{ duration: 200, delay: 200 }}
	out:fade={{ duration: 100 }}
>
	<h1>Levels</h1>
	{#each ripplesInLevel as ripples, i}
		<LevelCard level={i + 1} {ripples} />
	{/each}
</div>

<style>
	h1 {
		font-size: 4rem;
		margin-top: 0;
	}
	#centerBox {
		color: white;
		padding: 2rem;
		font-size: 3rem;
		border-radius: 1rem;
		background-color: rgb(56, 47, 47);
		position: absolute;
		top: 5%;
		bottom: 5%;
		left: 5%;
		right: 5%;
	}
	#blackBox {
		background-color: black;
		opacity: 0.9;
		height: 100vh;
		box-sizing: border-box;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
