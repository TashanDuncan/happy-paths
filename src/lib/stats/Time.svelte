<script lang="ts">
  export let mins;
  export let hours;
</script>

<div class="date">
  <h1>Monday</h1>
  <span>Time: {hours}:{mins === 0 ? "00" : mins}</span>
</div>

<style>
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
