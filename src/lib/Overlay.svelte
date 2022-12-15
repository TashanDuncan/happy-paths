<script lang="ts">
  export let score,
    act,
    name,
    currentScenarioType, currentScenarioId,
    storyText,
    overlayToggle,
    isOverlayVisible,
    health

  const everythingIsFineImage = '/images/everythingisfine.webp'

    function reloadPage(){
      window.location.reload()
    }
</script>

{#if isOverlayVisible}
  {#if currentScenarioId === 'fiery-death-monday'}    <img src='images/everythingisfine.webp' alt="office background"
                                                           class="overlay-background"/>{:else}
    <img src='images/desk-headphones-coffee.jpg' alt="office background"
                                              class="overlay-background"/>{/if}
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
        <h1>Congratulations</h1>
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
        It's the start of a new week at Generic UK No. 1 Automotive Classified Advertising Company. As
        an early career developer, you've got lots to learn. Can you survive
        to the end of the day?
      </p>
      <button on:click={act("stand-up-monday")} on:click={overlayToggle}
        >Start</button
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
    top: 20%;
    left: 0;
    right: 0;
    z-index: 3;
    margin: 0 auto;
    background-color: #fff;
    text-align: center;
    width: 50%;
    height: 50%;
    border-radius: 1rem;
    border: 5px solid black;
  }

  .overlay-background {
    z-index: 2;
    max-width: 100%;
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  button {
    border-radius: 4px;
    margin: 2rem;
    padding: 1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    background-color: #F17300;
    color: white;
    border: none
  }
</style>
