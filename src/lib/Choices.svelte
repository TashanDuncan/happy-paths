<script lang="ts">
  import { each } from "svelte/internal";



  export let handleHealth, choiceSelection, act, timer


</script>

<!-- Loop of Choices -->
<div class="box menu">
  <div class="choice-box">
    {#each Object.entries(choiceSelection) as [option, energy]}
          <button class="choice" on:click={handleHealth(energy)} on:click={act(option)} on:click={timer()}>{option}</button>
    {/each}
  </div>
</div>

<style>
</style>
