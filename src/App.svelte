<script>
  import Fretboard from "./Fretboard.svelte";
  import Header from "./Header.svelte";
  import ScoreKeeper from "./ScoreKeeper.svelte";
  import { screenStore } from "./Game/ScreenStore";
  import LevelChanger from "./LevelChanger/LevelChanger.svelte";
</script>

<main>
  {#if $screenStore === "game" || $screenStore === "levelChanger"}
    <Header />
    <Fretboard />
    <ScoreKeeper />
    {#if $screenStore === "levelChanger"}
      <LevelChanger />
    {/if}
  {:else if $screenStore === "welcome"}
    hiiii
  {:else if $screenStore === "?"}
    ?
  {/if}
</main>

<style>
  * {
    font-family: "Manjari Thin", sans-serif;
  }
</style>
