<script lang="ts">
  import { each } from "svelte/internal";


  /**
   * TODO: Have Choices Passed in as Array Or Object
   */
  export let handleHealth, choiceSelection

  enum Health{
    INCREASE = 'inc',
    DECREASE = 'dec'
  }

</script>

<!-- Loop of Choices -->
<div class="box menu">
  <div class="choice-box">
    <!-- <button class="choice" on:click={handleHealth(Health.INCREASE, 10)}>+10</button>
    <button class="choice" on:click={handleHealth(Health.INCREASE, 5)}>+5</button>
    <button class="choice" on:click={handleHealth(Health.DECREASE, 5)}>-5</button>
    <button class="choice" on:click={handleHealth(Health.DECREASE, 10)}>-10</button> -->
    {#each Object.entries(choiceSelection) as [option, energy]}
          <button class="choice" on:click={handleHealth(energy)}>{option}</button>
    {/each}
  </div>
</div>

<style>
</style>
