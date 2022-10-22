<script>
	import { GameState, gStore } from "./Game/Game";
	import { screenStore } from "./Game/ScreenStore";
	let percent;
	$: {
		percent =
			$gStore.outOf != 0
				? (
						(Number($gStore.userScore) /
							Number($gStore.outOf)) *
						100
				  ).toFixed(1)
				: "--";
	}
</script>

<div id="wholeBox">
	<h1>Game Stats:</h1>
	<div>
		<div>
			Score: {$gStore.userScore} / {$gStore.outOf}
			({percent}%) ({$gStore.skipped}
			skipped)
		</div>
		Level: {$gStore.level}
		<button
			class="changeButton"
			on:click={() => {
				screenStore.set("levelChanger");
			}}>Change</button
		>
	</div>
	<h1>Settings:</h1>
	<div>
		Play with high strings: {$gStore.topStringsAllowed ? "on" : "off"}

		<button
			class="changeButton"
			on:click={() => {
				gStore.set(
					new GameState(
						$gStore.level,
						!$gStore.topStringsAllowed
					)
				);
			}}
		>
			Change
		</button>
	</div>
	<div>
		Guiding Highlights: {$gStore.guidingHighlightsOn ? "on" : "off"}

		<button
			class="changeButton"
			on:click={() =>
				($gStore.guidingHighlightsOn =
					!$gStore.guidingHighlightsOn)}
			>Change</button
		>
	</div>
	<div>
		Dev mode (reveals answers): {$gStore.devMode ? "on" : "off"}
		<button
			class="changeButton"
			on:click={() => ($gStore.devMode = !$gStore.devMode)}
			>Change</button
		>
	</div>
</div>

<style>
	h1 {
		font-size: 3rem;
		padding: 0;
		margin: 0;
	}
	div {
		margin-bottom: 10px;
	}
	#wholeBox {
		font-size: 2rem;
		padding: 1.2rem;
		background-color: rgb(220, 197, 166);
		width: 30.8%;
		margin: 10px;
		border-radius: 10px;
	}
	.changeButton {
		font-family: "Manjari Thin", "Segoe UI", Tahoma, Geneva, Verdana,
			sans-serif;
	}
	button {
		font-family: "Verdana", "Segoe UI", Tahoma, Geneva, Verdana,
			sans-serif;
		font-size: 1.6rem;
		height: 2.6rem;
		width: 7rem;
	}
</style>
