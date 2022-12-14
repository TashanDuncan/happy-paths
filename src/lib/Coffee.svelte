<script lang="ts">
  export let setBackground, handleHealth;
  const drinkingSound = new Audio("/sounds/minecraft-drinking-sound.mp3");
  $: coffee = true;
  function drinkCoffee() {
    handleHealth(+20);
    setBackground("images/desk-headphones-nocoffee.jpg");
    coffee = false;
    drinkingSound.play();
  }
</script>

{#if coffee}
  <button class="box coffee" on:click={drinkCoffee} />
{/if}

<style>
  .coffee {
    bottom: 10%;
    right: 35%;
    width: 6vw;
    height: 100px;
    cursor: pointer;
    opacity: 0;
  }
</style>
