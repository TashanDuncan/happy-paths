<script lang="ts">
export let setBackground, handleHealth

$: coffee = true
function drinkCoffee(){
  handleHealth(+20)
  setBackground('images/desk-headphones-nocoffee.jpg')
  coffee = false
}
</script>

{#if coffee}
<button class="box coffee" on:click={drinkCoffee}>
</button>
{/if}


<style>
  .coffee {
    bottom: 10%;
    right: 35%;
    width: 6vw;
    height: 100px;
    cursor: pointer;
    opacity: 0
  }
</style>
