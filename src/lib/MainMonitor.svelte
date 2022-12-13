<script lang="ts">
export let storyText: string
</script>

<div class="box monitor">{storyText}</div>

<style>
.monitor {
  top: 22%;
  left: 13%;
  width: 28vw;
  height: 200px;
  transform: rotate(-5deg);
}
</style>