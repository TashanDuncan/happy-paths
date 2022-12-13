<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import Energy from "./lib/Energy.svelte";
  import { gameConfig } from "./lib/gameConfig";
  import LeftMonitor from "./lib/LeftMonitor.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import RightMonitor from "./lib/RightMonitor.svelte";
  import Time from "./lib/Time.svelte";

  let backGroundImg = "images/officeDesk.jpg";

  $: health = 100;
  $: storyText = "";
  $: choiceSelection = [];

  function handleHealth(energy): void {
    health += energy
  }
  $: if (health > 100) {
    health = 100;
  }
  $: if (health <= 0) {
    alert("GAME OVER! We will put a game over overlay here:) ");
  }

  function act(scenario) {
    const currentScenario = gameConfig.filter(
      (config) => config.scenario === scenario
    )[0];

    storyText = currentScenario.prompt;
    choiceSelection = currentScenario.options;
  }
</script>

<main class="parent">
  <Overlay {act} />
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Time />
  <Energy {health} />
  <LeftMonitor {storyText} />
  <RightMonitor />
  <Choices {act} {handleHealth} {choiceSelection} />
</main>
