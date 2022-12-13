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

<div class="energy">
  <div
    class="energy-gauge"
    style={`width:${health}%; background-color:${color};`}
  >
    <span class="energy-label">Energy: {health}%</span>
  </div>
</div>

<style>
  .energy {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 90%;
    height: 50px;
  }
  .energy-gauge {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .energy-label {
    position: absolute;
    left: 10%;
  }
</style>
