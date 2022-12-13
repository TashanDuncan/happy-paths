<script lang="ts">
export let storyText: string, name
</script>

<div class="box monitor">{storyText}<span class="logged-in">logged in as {name}</span></div>

<style>
.monitor {
  top: 7%;
  right: 1.5%;
  width: 45vw;
  height: 420px;
}
.logged-in{
  position: absolute;
  top: 4%;
  left: 4%;
}
</style>