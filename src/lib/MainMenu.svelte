<script lang="ts">
  export let name
  let visible = true;

  function hideOverlay() {
    visible = !visible;
  }
  
  function changeName(){
    
  }

</script>

{#if visible}
  <div class="main-menu">
    <h1>Happy Paths - The Game</h1>
    <label for="name">Enter Name (4 to 8 characters):</label>
    <input
      bind:value={name}
      type="text"
      name="name"
      id="name"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <button on:click={hideOverlay}> Start Your Journey </button>
  </div>
{/if}

<style>
  .main-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    background-color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;

  }
</style>
