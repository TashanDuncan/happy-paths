interface GameConfig {
    id: string;
    scenario: string;
    prompt?: string;
    options: Options[];
    random: boolean;
}

interface Options {
    option: string;
    energy: number;
    scenarioId: string;
    timeIncrease: number;
}

export const gameConfig: GameConfig[] = [
    {
        id: "stand-up-monday",
        scenario: "Stand up",
        prompt: "Talk about board?",
        options: [],
        random: false
    },
    {
        id: "start-monday",
        scenario: "Start",
        prompt: "What to do first?",
        options: [
            {option: "Check Slack", energy: -5, scenarioId: "stand-up-monday", timeIncrease: 30},
            {option: "Go Home", energy: -100, scenarioId: "home-monday", timeIncrease: 120},
            {option: "Poo", energy: +10, scenarioId: "bathroom-monday", timeIncrease: 60}
        ],
        random: false
    },
    {
        id: "slack-monday",
        scenario: "Slack",
        prompt: "something something",
        options: [
            {option: "Work on story", energy: -20, scenarioId: "project", timeIncrease: 200}],
        random: false
    }

    // {
    //   id:3,
    //   scenario: "Check Slack",
    //   possibleNextEvent: [5,6,7,8]
    //   // backend event
    // },
];