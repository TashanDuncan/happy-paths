<script lang="ts">
    let visible = true;

function hideOverlay() {
    visible = !visible
}

export let act
</script>

{#if visible}
<div class="overlay">
  <h1>Backstory</h1>
  <p>
    It's the start of another week at [Generic car advertising company]. As
    an (early career?) developer, you've got lots to learn. Can you survive
    to the end of the week?
  </p>
  <button 
  on:click={act('Start')}
  on:click={hideOverlay}

  
  >start</button>
</div>
{/if}


<style>

</style>