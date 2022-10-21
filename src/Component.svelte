<script lang="ts">
	import { generatePossibleAs, gStore } from "./Game/Game";
	let notes = [];
	$gStore.fretboard.strings.forEach((string) => {
		let currString = [];
		string.forEach((note) => {
			currString.push(note);
		});
		notes.push(currString);
	});
	function calculateClass(note) {
		let possAs = generatePossibleAs(
			$gStore.level,
			$gStore.currRound.Q,
			$gStore.fretboard
		);
		if (
			note.x === $gStore.currRound.Q.x &&
			note.y === $gStore.currRound.Q.y &&
			note.name === $gStore.currRound.Q.name
		) {
			return "question";
		} else if (note === $gStore.currRound.A) {
			return "answer";
		} else if (possAs.includes(note)) {
			return "Panswer";
		}
	}
</script>

<div style="margin-left: 1rem; font-size: 1.5rem">
	{#each $gStore.fretboard.strings as string}
		{#each string as note}
			<button
				on:click={() => {
					console.log(calculateClass(note));
				}}
				class={calculateClass(note)}>{note.name}</button
			>
		{/each}
		<br />
	{/each}
	{$gStore.currRound.A.x}
	<button
		on:click={() => {
			$gStore.createNewRound();
			$gStore = $gStore;
		}}>New</button
	>
</div>

<style>
	.question {
		background-color: orange;
	}
	.Panswer {
		background-color: red;
	}
	.answer {
		background-color: rgb(73, 140, 162);
	}

	button {
		width: 3rem;
		height: 3rem;
		font-size: 1.5rem;
	}
</style>
