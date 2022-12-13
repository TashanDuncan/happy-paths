<script lang="ts">
  import { each } from "svelte/internal";


  /**
   * TODO: Have Choices Passed in as Array Or Object
   */
  export let handleHealth, choiceSelection, act

  enum Health{
    INCREASE = 'inc',
    DECREASE = 'dec'
  }

</script>

<!-- Loop of Choices -->
<div class="box menu">
  <div class="choice-box">
    {#each Object.entries(choiceSelection) as [option, energy]}
          <button class="choice" on:click={handleHealth(energy)} on:click={act(option)}>{option}</button>
    {/each}
  </div>
</div>

<style>
</style>
