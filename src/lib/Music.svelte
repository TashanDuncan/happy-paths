<script lang="ts">
  export let currentScenarioType;
  $: isPlaying = false;
  $: isShowing = true;
  let backgroundMusic = new Audio(
    "sounds/we-wish-you-a-merry-christmas-126685.mp3"
  );
  let gameOverSound = new Audio("sounds/failure-4-with-gong-69906.mp3");

  $: if (currentScenarioType === "game-over") {
    isShowing = false
    backgroundMusic.pause();
    gameOverSound.play();
  }
  backgroundMusic.loop = true;
  function toggleMusic() {
    if (!backgroundMusic.paused) {
      backgroundMusic.pause();
      isPlaying = false;
    } else {
      backgroundMusic.play();
      isPlaying = true;
    }
  }
</script>

<div />
{#if isShowing}
  <button class="sound" on:click={toggleMusic}>
    {#if isPlaying}
      <i class="fas fa-volume-up fa-3x" />
    {:else}
      <i class="fas fa-volume-mute fa-3x" />
    {/if}
  </button>
{/if}

<style>
  .sound {
    position: absolute;
    right: 1%;
    top: 1%;
    z-index: 99999;
  }
</style>
