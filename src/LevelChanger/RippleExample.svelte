<script>
	export let ripples;
	let buttons = [];
	for (let negY = 0; negY <= 4; negY++) {
		for (let c = 0; c <= 4; c++) {
			if (negY === ripples[3] && c === 0)
				// can add stuff to this to make it render properly. Hmmm...
				buttons.push("EEE");
			else buttons.push(ripples[negY]);
			// buttons.push("hi" + b);
		}
		buttons.push("br");
	}
</script>

<div>
	{ripples}
	<div>
		{#each buttons as but, index}
			{#if but !== "br"}
				{#if index === buttons.length / 2 - 1}
					<button class="Qbut">{but}</button>
				{:else}
					<button class="but">{but}</button>
				{/if}
			{:else if but === "br"}
				<br />
			{/if}
		{/each}
	</div>
</div>

<style>
	br {
		height: 0px;
		line-height: 0;
		margin: 0;
		padding: 0;
	}
	.Qbut {
		background-color: orange;
	}
	.PAbut {
		background-color: red;
	}
	.but,
	.Qbut,
	.PAbut {
		width: 55px;
		height: 55px;
		margin: 0px;
		padding: 0px;
	}
</style>
