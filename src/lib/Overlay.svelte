<script lang="ts">
  export let score,
    act,
    name,
    currentScenarioType,
    storyText,
    overlayToggle,
    isOverlayVisible;

    function reloadPage(){
      window.location.reload()
    }
</script>

{#if isOverlayVisible}
  {#if currentScenarioType === "game-over"}
    <div class="overlay">
      <h1>GAME OVER</h1>
      <p>
        {storyText}
      </p>
      <p>Final Score: {score}</p>
      <button on:click={reloadPage}
        >Restart</button
      >
    </div>
  {:else}
    <div class="overlay">
      <h1>Welcome {name}</h1>
      <p>
        It's the start of another week at [Generic car advertising company]. As
        an (early career?) developer, you've got lots to learn. Can you survive
        to the end of the week?
      </p>
      <button on:click={act("stand-up-monday")} on:click={overlayToggle}
        >start</button
      >
    </div>
  {/if}
{/if}

<style>
  .overlay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    background-color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
  }
</style>
