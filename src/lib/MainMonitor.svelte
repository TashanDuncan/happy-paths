<script lang="ts">
  import MemoryGame from "./mini-games/memory-game/MemoryGame.svelte";
  import DebuggingGame from "./mini-games/debugging-game/DebuggingGame.svelte";
  import DrivingTest from "./mini-games/driving-test/DrivingTest.svelte";


export let storyText: string, currentScenarioId

$: text = storyText.split('\n')

</script>

{#if currentScenarioId === 'debugging-game-monday'}
  <div class="box monitor"><DebuggingGame/></div>
{:else if currentScenarioId === 'memory-game-monday'}
<div class="box monitor"><MemoryGame/></div>
{:else if currentScenarioId === 'driving-game-monday'}
<div class="box monitor"><DrivingTest/></div>
{:else}
<div class="box monitor">{#each text as line}
  <p>{line}</p>
{/each}</div>
{/if}



<style>
.monitor {
  display: flex;
  flex-direction: column;
  top: 7%;
  right: 1.5%;
  width: 45vw;
  height: 420px;
}
</style>