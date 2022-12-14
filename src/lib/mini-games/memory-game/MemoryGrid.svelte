<script>
  import { afterUpdate } from "svelte";
  import Cell from "./MemoryCell.svelte";
  import { memoryInput } from "./utils/MemoryInput";

  import {
    shuffleArray,
    markSolved,
  } from "./utils/MemoryUtils.js";

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

<div
  class="grid"
  style="--size: {size}; --cell-size: {cellSize}; --padd: {gap}"
>
  {#each cells as cell, index (cell.key)}
    <Cell {peekTwo} {cell} {handleClick} />
  {/each}
</div>


<div class="score">
  Score: {memoryScore}
  <br />
</div>

<style scoped>
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
