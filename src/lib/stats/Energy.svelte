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
  Energy:<div
    class="energy-gauge"
    style={`width:${health}%; background-color:${color};`}
  />
</div>

<style>
  .energy {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    bottom: 15%;
    right: 1%;
    width: 90%;
    height: 50px;
  }
  .energy-gauge {
    height: 100%;
  }
</style>
