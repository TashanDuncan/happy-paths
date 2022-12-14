<div class="grid" style="--size: {size}; --cell-size: {cellSize}; --padd: {gap}">
    {#each cells as cell, index (cell.key)}
      <Cell 
        peekTwo="{peekTwo}" 
        cell="{cell}" 
        onHandleClick="{handleClick}" 
      />
      {/each}
  </div>
  
  <script>
    import { afterUpdate } from 'svelte';
    import Cell from './MemoryCell.svelte'
  
    import {makeRepeatedArr, shuffleArray, markSolved} from './utils/MemoryUtils.js'
  
    // State
    const cellSize = '60px'
    const gap = '10px'
    let size = 4
    let peekTwo = []
    let cells = shuffleArray(makeRepeatedArr(size))
    console.log(makeRepeatedArr(size))
  
    const handleClick = (key) => {
      if (peekTwo.includes(key)) return
  
      if (peekTwo.length === 2) {
        peekTwo = [key]
      } else {
        peekTwo = [...peekTwo, key]
      }
    }
  
    $: twoMatched = (
      peekTwo.length === 2 
      && 
      cells.find(c => c.key === peekTwo[0]).val === cells.find(c => c.key === peekTwo[1]).val
    )
  
  
    afterUpdate(() => {
          if (twoMatched) {
        cells = markSolved(cells, peekTwo)
        peekTwo = []
      }
      });
  
  </script>
  
  
  
  <style scoped>
  .grid {
    --grid-size: calc(var(--cell-size) * var(--size) + var(--padd) * (var(--size)));
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