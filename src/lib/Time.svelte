<script lang="ts">
  let mins = 0;
  let hours = 9;

  function timer() {
    mins += 10;
    if (mins === 60) {
      mins = 0;
      hours++;
    }
  }

  $: if(hours === 18){
    alert('GAME OVER! We will put a game over overlay here:) ')
  }
  //currently set to add 10 mins each second. should probably slow this down in live
  setInterval(timer, 1000);

  $: time = `${hours}:${mins === 0 ? "00" : mins}`;
</script>

<div class="box date">
  <h1>Monday</h1>
  <span>{time}</span>
</div>

<style>
  .date{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
