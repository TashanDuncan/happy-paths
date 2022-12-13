<script lang="ts">
  export let act, name;
  let visible = true;

  function hideOverlay() {
    visible = !visible;
  
  function showGameOverOverlay() {
    
  }
  }
</script>

{#if visible}
  <div class="overlay">
    <h1>Welcome {name}</h1>
    <p>
      It's the start of another week at [Generic car advertising company]. As an
      (early career?) developer, you've got lots to learn. Can you survive to
      the end of the week?
    </p>
    <button on:click={act("stand-up-monday")} on:click={hideOverlay}>start</button>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    z-index: 2;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    left: 20%;
    top: 50%;
    text-align: center;
  }
</style>
