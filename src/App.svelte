<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import Energy from "./lib/Energy.svelte";
  import LeftMonitor from "./lib/LeftMonitor.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import RightMonitor from "./lib/RightMonitor.svelte";
  import Time from "./lib/Time.svelte";

  let backGroundImg = "images/officeDesk.jpg";
</script>

<main class="parent">
  <Overlay />
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Time />
  <Energy />
  <LeftMonitor />
  <RightMonitor />
  <Choices />
</main>
