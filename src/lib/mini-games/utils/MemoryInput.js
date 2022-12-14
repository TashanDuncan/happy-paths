interface GameConfig {
    id: string;
    scenario: string;
    prompt: string;
    options?: Options[];
    type: "normal" | "game-over" | "mini-game";
}

interface Options {
    option: string;
    energy: number;
    scenarioId: string;
    timeIncrease: number;
}

export const gameConfig: GameConfig[] = [