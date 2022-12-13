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

  function handleHealth(choice, amount: number): void {
    const storyChapter = gameConfig.filter(
            (config) => config.choice === choice
    )[0];

  }
  $: if (health > 100) {
    health = 100;
  }
  $: if (health <= 0) {
    alert("GAME OVER! We will put a game over overlay here:) ");
  }

  function act(choice) {
    const storyChapter = gameConfig.filter(
      (config) => config.choice === choice
    )[0];

    storyText = storyChapter.prompt;
    choiceSelection = storyChapter.options;
  }
</script>

<main class="parent">
  <Overlay {act} />
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Time />
  <Energy {health} />
  <LeftMonitor {storyText} />
  <RightMonitor />
  <Choices {handleHealth} {choiceSelection} />
</main>
