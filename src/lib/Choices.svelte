<script lang="ts">
    export let handleHealth, choiceSelection, act, timer


</script>

<!-- Loop of Choices -->
<div class="box menu">
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
</style>
