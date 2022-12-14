<script lang="ts">
  import MemoryGame from "./mini-games/memory-game/MemoryGame.svelte";
  import DebuggingGame from "./mini-games/debugging-game/DebuggingGame.svelte";
  import DrivingTest from "./mini-games/driving-test/DrivingTest.svelte";

  export let storyText: string, currentScenarioId, setScore

  $: text = storyText.split("\n");
</script>

{#if currentScenarioId === "debugging-game-monday"}
  <div class="box monitor"><DebuggingGame {setScore}/></div>
{:else if currentScenarioId === "memory-game-monday"}
  <div class="box monitor"><MemoryGame {setScore}/></div>
{:else if currentScenarioId === "driving-game-monday"}
  <div class="box monitor" style="align-items: normal;"><DrivingTest {setScore}/></div>
{:else}
  <div class="box monitor">
    {#each text as line}
      <p>{line}</p>
    {/each}
  </div>
{/if}

<style>
  .monitor {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 7%;
    right: 1.5%;
    width: 45vw;
    height: 420px;
  }
</style>
