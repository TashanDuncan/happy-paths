<script lang="ts">
  export let health: number;

  let color: string;

  $: if (health > 75) {
    color = "green";
  } else if (health < 25) {
    color = "red";
  } else {
    color = "orange";
  }
</script>

<div class="box energy">
  <div
    class="energy-gauge"
    style={`height:${health}%; background-color:${color};`}
  />
</div>

<style>
  .energy {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .energy-gauge {
    width: 100%;
  }
</style>
