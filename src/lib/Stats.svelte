<script lang="ts">
    import Energy from "./stats/Energy.svelte";
    import Score from "./stats/Score.svelte";
    import Time from './stats/Time.svelte'

    export let mins
    export let hours
    export let health: number;
    export let score;

</script>

<div class="box stats">
    <Time {mins} {hours}/>
    <Energy {health}/>
    <Score {score}/>
</div>

<style>
    .stats {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 1%;
        left: 1%;
        width: 20vw;
        height: 100px;
        outline: 2px solid black;
        border-radius: 10px;
    }
</style>