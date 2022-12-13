<script lang="ts">
  export let mins
  export let hours




  $: if(hours === 18){
    alert('GAME OVER! We will put a game over overlay here:) ')
  }
</script>

<div class="box date">
  <h1>Monday</h1>
  <span>{hours}:{mins === 0 ? "00" : mins}</span>
</div>

<style>
  .date{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
