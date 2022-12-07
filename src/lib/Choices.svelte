<script lang="ts">
  /**
   * TODO: Have Choices Passed in as Array Or Object
   */
  
  export let handleHealth

  enum Health{
    INCREASE = 'inc',
    DECREASE = 'dec'
  }

</script>

<!-- Loop of Choices -->
<div class="box menu">
  <div class="choice-box">
    <button class="choice" on:click={handleHealth(Health.INCREASE, 10)}>+10</button>
    <button class="choice" on:click={handleHealth(Health.INCREASE, 5)}>+5</button>
    <button class="choice" on:click={handleHealth(Health.DECREASE, 5)}>-5</button>
    <button class="choice" on:click={handleHealth(Health.DECREASE, 10)}>-10</button>
</div>
</div>

<style>
</style>
