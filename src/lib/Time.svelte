<script lang="ts">
  export let mins
  export let hours




  $: if(hours === 18){
    alert('GAME OVER! We will put a game over overlay here:) ')
  }
  //currently set to add 10 mins each second. should probably slow this down in live
  //setInterval(timer, 1000);

  // $: time = `${hours}:${mins === 0 ? "00" : mins}`;
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
