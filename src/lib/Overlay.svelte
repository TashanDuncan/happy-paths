<script lang="ts">
  export let score,
    act,
    name,
    currentScenarioType,
    storyText,
    overlayToggle,
    isOverlayVisible,
    health

    function reloadPage(){
      window.location.reload()
    }
</script>

{#if isOverlayVisible}
  {#if currentScenarioType === "game-over" || health <= 0}
    <div class="overlay">
      <h1>GAME OVER</h1>
      <p>
        {#if currentScenarioType === "game-over"}{storyText}
        {:else}
        You ran out of Energy :(
        {/if}
      </p>
      <p>Final Score: {score}</p>
      <button on:click={reloadPage}
        >Restart</button
      >
    </div>
    {:else if currentScenarioType === "game-win"}
      <div class="overlay">
        <h1>You win</h1>
        <p>
         Congratulations {storyText}
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
        It's the start of a new week at Generic UK No. 1 Automotive Classified Advertising Company. As
        an early career developer, you've got lots to learn. Can you survive
        to the end of the day?
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
