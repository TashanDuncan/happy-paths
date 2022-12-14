<script lang="ts">
export let storyText: string, currentScenarioId
</script>

{#if currentScenarioId === 'debugging-game-monday'}
<div class="box monitor">GAME</div>
{:else}
<div class="box monitor">{storyText}</div>
{/if}



<style>
.monitor {
  top: 7%;
  right: 1.5%;
  width: 45vw;
  height: 420px;
}
</style>