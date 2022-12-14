<script>
    import {onMount} from "svelte";
    let seconds = 20
    let bugs = []
    let score = 0

    function createBug() {
        bugs.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            speedX: (Math.random() - 0.5) * 50,
            speedY: (Math.random() - 0.5) * 50,
        })
    }

    function moveBugs() {
        bugs = bugs.map(bug => {
            bug.x += bug.speedX
            bug.y += bug.speedY
            return bug
        })
    }

    function removeOffScreenBugs() {
        bugs = bugs.filter(bug => {
            return (bug.x >= 0 && bug.x <= 100) && (bug.y >= 0 && bug.y <= 100)
        })
    }

    function updateGame() {
        seconds -= 1
        if (seconds === 0) {
            clearInterval(gameInterval)
        }
        createBug()
        moveBugs()
        removeOffScreenBugs()
    }

    let gameInterval = setInterval(updateGame, 1000)

    function onBugClick(bug) {
        score += 1
        bugs = bugs.filter(b => b !== bug)
    }

    onMount(() => {
        createBug()
    })
</script>

<div>
    Time remaining: {seconds} seconds
    <br>
    Score: {score}
    <br>
    {#each bugs as bug}
        <div
                style="position: absolute; left: {bug.x}%; top: {bug.y}%"
                on:click={() => onBugClick(bug)}
        >
            Bug
        </div>
    {/each}
</div>