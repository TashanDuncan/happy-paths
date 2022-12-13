<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import Energy from "./lib/Energy.svelte";
  import { gameConfig } from "./lib/gameConfig";
  import LeftMonitor from "./lib/LeftMonitor.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import Time from './lib/Time.svelte'

  let backGroundImg = "images/newOfficeDesk.jpg";

  $: health = 100;
  $: storyText = "";
  $: choiceSelection = [];
  $: mins = 0
  $: hours = 9;
  function handleHealth(energy: number): void {
    health += energy
  }
  $: if (health > 100) {
    health = 100;
  }
  $: if (health <= 0) {
    alert("GAME OVER! We will put a game over overlay here:) ");
  }

  function timer(timeUp: number) {
    mins += timeUp;
    while (mins >= 60) {
      mins -= 60;
      hours++;
    }
  }

  function act(scenarioId: string) {
    const currentScenario = gameConfig.filter(
      (config) => config.id === scenarioId
    )[0];


    storyText = currentScenario.prompt;
    choiceSelection = currentScenario.options;
  }
</script>

<main class="parent">
  <Overlay {act}/>
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Time {mins}{hours}/>
  <Energy {health} />
  <LeftMonitor {storyText} />
  <Choices {act} {handleHealth} {choiceSelection} {timer} />
</main>
