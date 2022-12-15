<script>
  export let setScore, currentScenarioId;
  let countdownSound = new Audio("sounds/countdown.mp3");

  $: seconds = 20;

  function countdown() {
    seconds -= 1;
    if (seconds === 0) {
      clearInterval(gameInterval);
      setScore(memoryScore);
      console.log(currentScenarioId)
      if (currentScenarioId == "memory-game-monday") countdownSound.play();
    }
  }

  let gameInterval = setInterval(countdown, 1000);

  import { afterUpdate } from "svelte";
  import { memoryInput } from "./utils/MemoryInput";

  import { shuffleArray, markSolved } from "./utils/MemoryUtils.js";

  export let memoryScore;
  // State
  const cellSize = "60px";
  const gap = "10px";
  let size = 4;
  let peekTwo = [];
  let cells = shuffleArray(memoryInput);
  memoryScore = 0;

  const handleClick = (key) => {
    if (peekTwo.includes(key)) return;

    if (peekTwo.length === 2) {
      peekTwo = [key];
    } else {
      peekTwo = [...peekTwo, key];
    }
  };

  $: twoMatched =
    peekTwo.length === 2 &&
    cells.find((c) => c.key === peekTwo[0]).val ===
      cells.find((c) => c.key === peekTwo[1]).val;

  afterUpdate(() => {
    if (twoMatched) {
      cells = markSolved(cells, peekTwo);
      peekTwo = [];
      memoryScore++;
      console.log(memoryScore);
    }
  });
</script>

<main>
  {#if seconds > 0}
    <h1>Match up the meeting rooms as quickly as possible!</h1>
    <div
      class="grid"
      style="--size: {size}; --cell-size: {cellSize}; --padd: {gap}"
    >
      {#each cells as cell, index (cell.key)}
        <button
          class="
    cell 
    {peekTwo.includes(cell.key) ? 'peek' : ''}
    {cell.solved ? 'solved' : ''}
  "
          data-cell-val={cell.val}
          style="--img: {cell.img}"
          on:click={() => handleClick(cell.key)}
        />
      {/each}
    </div>

    <div class="score">
      Score: {memoryScore}
      <br />
    </div>
    <div class="time">
      Time remaining: {seconds} seconds
    </div>
  {:else}
    <div class="end-game">
      You were fashionably late to your meeting. Your scored {memoryScore} points.
    </div>
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
  .cell {
    position: relative;
    width: var(--cell-size);
    height: var(--cell-size);
    border-radius: 3px;
    margin: 0.1rem;
    transform-style: preserve-3d;
    transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 1rem;
  }

  .cell:after,
  .cell:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  .cell:before {
    content: attr(data-cell-val);
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-image: var(--img);
    color: #fff;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .cell:after {
    backface-visibility: hidden;
    background: #444;
    z-index: 1;
  }

  /* .cell:hover, */
  .cell.peek,
  .cell.solved {
    transform: rotateY(180deg);
  }

  .cell.solved:before {
    background: #202b61;
  }

  .grid {
    --grid-size: calc(
      var(--cell-size) * var(--size) + var(--padd) * (var(--size))
    );
    background: #f6fafd;
    margin-top: 1rem;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding: calc(var(--padd) * 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    width: var(--grid-size);
    user-select: none;
  }
</style>
