<script lang="ts">
  import TicTacToe from "./TicTacToe.svelte";


export let storyText: string, currentScenarioId

$: text = storyText.split('\n')

</script>

{#if currentScenarioId === 'debugging-game-monday'}
<div class="box monitor"><TicTacToe></TicTacToe></div>
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