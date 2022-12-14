<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import { gameConfig } from "./lib/gameConfig";
  import MainMenu from "./lib/MainMenu.svelte";
  import MainMonitor from "./lib/MainMonitor.svelte";
  import Music from "./lib/Music.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import Stats from "./lib/Stats.svelte";

  let backGroundImg = "images/officeDesk.jpg";

  $: name = "employee";
  $: health = 100;
  $: score = 0;
  $: currentScenarioId = "";
  $: currentScenarioType = "";
  $: storyText = "";
  $: choiceSelection = [];
  $: mins = 0;
  $: hours = 9;
  let isOverlayVisible = true;

  function handleHealth(scenarioId: number, energy: number): void {
    health += energy;
    if (health > 100) {
      health = 100;
    }
    if (health <= 0) {
      act("no-energy");
    }
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

    currentScenarioId = currentScenario.id;
    currentScenarioType = currentScenario.type;
    storyText = currentScenario.prompt;
    choiceSelection = currentScenario.options;
  }

  function changeName(e) {
    name = e.target.value;
  }

  function overlayToggle() {
    isOverlayVisible = !isOverlayVisible;
  }

  function setScore(gameScore) {
    score += gameScore
  }

  $: if (currentScenarioType === "game-over") {
    overlayToggle();
  }
</script>

<main class="parent">
  <Music {currentScenarioType} />
  <MainMenu {changeName} />
  <Overlay
    {act}
    {name}
    {storyText}
    {currentScenarioType}
    {overlayToggle}
    {isOverlayVisible}
    {score}
    {health}
  />
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Stats {score} {mins} {hours} {health} />
  <MainMonitor {storyText} {currentScenarioId} {setScore}/>
  <Choices {act} {handleHealth} {choiceSelection} {timer} />
</main>

<style>
  .parent {
    position: relative;
  }
</style>
