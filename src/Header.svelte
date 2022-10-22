<script>
	import { gStore } from "./Game/Game";
</script>

<div>
	<p>Guitar Trainer</p>
	<button
		alt="Skip to the next question"
		id="skipQButton"
		on:click={() => {
			$gStore.createNewRound();
			$gStore.skipped++;
		}}>Skip</button
	>
	<button
		id="replayButton"
		on:click={() => {
			$gStore.createNewRound();
		}}>Replay sound</button
	>
	<button alt="Instructions">?</button>
</div>

<style>
	#replayButton {
		width: 15rem;
		margin-right: 15px;
	}
	#skipQButton {
		width: 6rem;
		margin-right: 15px;
	}
	p {
		font-size: 2.5rem;
		font-weight: 900;
		margin: 0;
		padding-top: 1rem;
		padding-right: 1rem;
	}
	div {
		background-color: rgb(153, 210, 229);
		padding: 15px;
		display: flex;
		flex-direction: row;
	}
	button {
		font-family: "Verdana", "Segoe UI", Tahoma, Geneva, Verdana,
			sans-serif;
		margin: 0.2rem;
		font-size: 2rem;
		height: 3rem;
		width: 3rem;
	}
</style>
