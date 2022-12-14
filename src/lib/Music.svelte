<script lang="ts">
$: isPlaying = false
  let backgroundMusic = new Audio('sounds/we-wish-you-a-merry-christmas-126685.mp3')
  backgroundMusic.loop = true;
  function toggleMusic(){
    if(!backgroundMusic.paused ) {
      backgroundMusic.pause()
      isPlaying = false
    } else {
      backgroundMusic.play()
      isPlaying = true
    }
  }

</script>
<div></div>
<button class="sound" on:click={toggleMusic}>
  {#if isPlaying}
  <i class="fas fa-volume-up fa-3x" ></i>
  {:else}
  <i class="fas fa-volume-mute fa-3x" ></i>
  {/if}
  </button>

<style>
  .sound{
    position: absolute;
    right: 1%;
    top: 1%;
    z-index: 99999;
  }
</style>