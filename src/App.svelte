<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import Energy from "./lib/Energy.svelte";
  import LeftMonitor from "./lib/LeftMonitor.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import RightMonitor from "./lib/RightMonitor.svelte";
  import Time from "./lib/Time.svelte";

  let backGroundImg = "images/officeDesk.jpg";

  $: health = 100;

  function handleHealth(opeartion: "inc" | "dec", amount: number): void {
    if (opeartion === "inc") {
      health += amount;
    }
    if (opeartion === "dec") {
      health -= amount;
    }
  }
  $: if (health > 100) {
    health = 100;
  }
</script>

<main class="parent">
  <Overlay />
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Time />
  <Energy {health} />
  <LeftMonitor />
  <RightMonitor />
  <Choices {handleHealth} />
</main>
