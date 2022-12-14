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
  $: storyText = "";
  $: choiceSelection = [];
  $: mins = 0
  $: hours = 9;

  function handleHealth(scenarioId: number, energy: number): void {
    health += energy
    if (health > 100) {
    health = 100;
  }
    if (health <= 0) {
    console.log(scenarioId)
    alert("GAME OVER! We will put a game over overlay here:) ");
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
    storyText = currentScenario.prompt;
    choiceSelection = currentScenario.options;
  }

  function changeName(e){
    name = e.target.value
  }
</script>

<main class="parent">
  <MainMenu {changeName}/>
  <Overlay {act} {name}/>
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