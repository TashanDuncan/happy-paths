<script lang="ts">
    export let handleHealth, choiceSelection, act, timer


</script>

<!-- Loop of Choices -->
<div class="box laptop">
    <div class="choice-box">
        {#each choiceSelection as choice}
            <button class="choice" on:click={handleHealth(choice.energy)}
                    on:click={timer(choice.timeIncrease)}
                    on:click={act(choice.scenarioId)}
                    >{choice.option}</button>
        {/each}
    </div>
</div>

<style>
  .laptop {
  top: 40%;
  left: 9%;
  width: 33vw;
  height: 290px;
}
.choice-box {
  height: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  list-style-type: none;
}

.choice {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25%;
  width: 100%;
  text-align: center;
  align-self: center;
  cursor: pointer;
}
button{
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.choice:hover {
  background-color: gray;
}
</style>
