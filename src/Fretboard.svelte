<script lang="ts">
	import { generatePossibleAs, gStore } from "./Game/Game";
	import { findSoundFileName, play } from "./Game/Sounds";
	let notes = [];
	$gStore.fretboard.strings.forEach((string) => {
		let currString = [];
		string.forEach((note) => {
			currString.push(note);
		});
		notes.push(currString);
	});

	function answer(note) {
		if (note === $gStore.currRound.A) {
			document.body.style.backgroundColor = "green";
			$gStore.userScore++;
			$gStore.outOf++;
			$gStore.createNewRound();
			$gStore.userScore = $gStore.userScore; // required by Svelte to update the component
		} else {
			document.body.style.backgroundColor = "red";
			$gStore.outOf++;
			// required by Svelte to update the component
		}
		$gStore.userScore = $gStore.userScore;
		$gStore.outOf = $gStore.outOf;
	}

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
		} else if (note === $gStore.currRound.A && $gStore.devMode) {
			return "answer";
		} else if (
			possAs.includes(note) &&
			$gStore.guidingHighlightsOn
		) {
			return "Panswer";
		}
	}
</script>

<div style="margin-left: 1rem; font-size: 1.5rem">
	{#each $gStore.fretboard.strings as string}
		{#each string as note}
			<button
				on:click={() => {
					play(note);
					answer(note);
				}}
				disabled={!note.isActive}
				class={calculateClass(note)}>{note.name}</button
			>
		{/each}
		<br />
	{/each}
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
		border-radius: 0.5rem;
	}
</style>
