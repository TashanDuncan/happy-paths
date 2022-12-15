<script lang="ts">
  import Choices from "./lib/Choices.svelte";
  import Coffee from "./lib/Coffee.svelte";
  import { gameConfig } from "./lib/gameConfig";
  import MainMenu from "./lib/MainMenu.svelte";
  import MainMonitor from "./lib/MainMonitor.svelte";
  import Music from "./lib/Music.svelte";
  import Overlay from "./lib/Overlay.svelte";
  import Stats from "./lib/Stats.svelte";

  
  $: backGroundImg = "images/desk-headphones-coffee.jpg";
  $: name = "employee";
  $: health = 100;
  $: score = 0;
  $: currentScenarioId = "";
  $: currentScenarioType = "";
  $: storyText = "";
  $: choiceSelection = [];
  $: mins = 0;
  $: hours = 9;
  $: isPlaying = false
  let isOverlayVisible = true;

  function handleHealth(energy: number): void {
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

  function setScore(gameScore: number) {
    score += gameScore
  }

  function setBackground(url: string) {
    backGroundImg = url
  }

  function setPlayingState(state:boolean) {
    isPlaying = state
  }

  $: if (currentScenarioType === "game-over" || currentScenarioType === "game-win") {
    overlayToggle();
  }

  $: if(currentScenarioType === "mini-game") {
     isPlaying = true
   }



</script>

<main class="parent">
  <Music {currentScenarioType}/>
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
  <MainMonitor {storyText} {currentScenarioId} {setScore} {setPlayingState}/>
  <Choices {act} {handleHealth} {choiceSelection} {currentScenarioId} {timer} {isPlaying}/>
  <Coffee {setBackground} {handleHealth} {act}/>
</main>

<style>
  .parent {
    position: relative;
  }
</style>
