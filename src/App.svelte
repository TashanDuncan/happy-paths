<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import { gameConfig } from "./lib/gameConfig";
  import MainMenu from "./lib/MainMenu.svelte";
  import MainMonitor from "./lib/MainMonitor.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import Stats from "./lib/Stats.svelte";

  let backGroundImg = "images/officeDesk.jpg";
   
  $: name = 'employee'
  $: health = 100;
  $: score = 0
  $: currentScenarioId = ''
  $: currentScenarioType = ''
  $: storyText = "";
  $: choiceSelection = [];
  $: mins = 0
  $: hours = 9;
  let isOverlayVisible = true;

  function handleHealth(scenarioId: number, energy: number): void {
    health += energy
    if (health > 100) {
    health = 100;
  }
    if (health <= 0) {
    storyText = 'You ran out of evergy'
    currentScenarioType = 'game-over'
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

    currentScenarioId = currentScenario.id
    currentScenarioType = currentScenario.type
    storyText = currentScenario.prompt;
    choiceSelection = currentScenario.options;
  }

  function changeName(e){
    name = e.target.value
  }


function overlayToggle() {
  isOverlayVisible = !isOverlayVisible;
}

$: if(currentScenarioType === 'game-over'){
  overlayToggle()
}
</script>

<main class="parent">
  <MainMenu {changeName}/>
  <Overlay {act} {name} {storyText}{currentScenarioType} {overlayToggle} {isOverlayVisible}{score}/>
  <img src={backGroundImg} alt="office background" class="background-image" />
  <Stats {score} {mins}{hours} {health}/>
  <MainMonitor {storyText}{currentScenarioId} />
  <Choices {act} {handleHealth} {choiceSelection} {timer} />
</main>

<style>
  .parent {
  position: relative;
}

</style>