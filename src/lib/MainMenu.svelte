<script lang="ts">
  export let changeName
  let visible = true;

  function hideOverlay() {
    visible = !visible;
  }

</script>

{#if visible}
  <div class="main-menu">
    <h1>😀😀 Happy Paths - The Game 😀😀</h1>
    <label for="name">Enter Name:</label>
    <input
      on:input={changeName}
      type="text"
      name="name"
      id="name"
      required
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

  button {
    border-radius: 4px;
    margin: 2rem;
    padding: 1rem;
    font-family: 'Montserrat Alternates', sans-serif;
    background-color: #F17300;
    color: white;
    font-weight: 700;
  }

  label {
    font-family: 'Space Grotesk', sans-serif;
  }

</style>
