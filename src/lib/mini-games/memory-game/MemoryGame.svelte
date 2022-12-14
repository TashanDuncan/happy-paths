<script>
  import Grid from "./MemoryGrid.svelte";
  let seconds = 30;
  let score = 0;

  function updateGame() {
    seconds -= 1;
    if (seconds === 0) {
      clearInterval(gameInterval);
    }
  }

  let gameInterval = setInterval(updateGame, 1000);
</script>

<main>
  <h1>Match up the meeting rooms as quickly as possible!</h1>

  <Grid />
</main>

<div class="time">
  Time remaining: {seconds} seconds
  <br />
  Score: {score}
  <br />
</div>

<style>
  :root {
    font-family: Arial, Helvetica, sans-serif;
  }

  .time {
    text-align: center;
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

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }
</style>
