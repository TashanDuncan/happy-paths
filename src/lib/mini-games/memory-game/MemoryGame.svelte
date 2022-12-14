<script>
  import Grid from "./MemoryGrid.svelte";
  $: seconds = 20;

  function countdown() {
    seconds -= 1;
    if (seconds === 0) {
      clearInterval(gameInterval);
    }
  }

  let gameInterval = setInterval(countdown, 1000);
</script>

<main>
  {#if seconds>0}
  <h1>Match up the meeting rooms as quickly as possible!</h1>
  <Grid />
  <div class="time">
    Time remaining: {seconds} seconds
  </div>
  {:else}
  <div class="end-game">You were fashionably late to your meeting. </div>
  {/if}

</main>



<style>
  :root {
    font-family: Arial, Helvetica, sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #050a6f;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: none;
  }

  .end-game {
    font-size: 2rem;
  }
</style>
