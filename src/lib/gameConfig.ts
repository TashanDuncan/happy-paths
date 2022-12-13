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
        options: [
            {option: "Option 1", energy: -10, scenarioId: "clap-monday", timeIncrease: 15},
            {option: "Option 2", energy: -10, scenarioId: "clap-monday", timeIncrease: 15}
        ],
        random: false
    },
    {
        id: "clap-monday",
        scenario: "Stand up",
        prompt: "Your team ends every stand up with a clap. It's something to do with team bonding and it's not weird at all. Definitely not cult like. Nope. Not at all. On 4...",
        options: [
            {option: "1...", energy: -10, scenarioId: "start-monday", timeIncrease: 15},
            {option: "2...", energy: -10, scenarioId: "start-monday", timeIncrease: 15},
            {option: "3...", energy: -10, scenarioId: "start-monday", timeIncrease: 15},
            {option: "4!", energy: +5, scenarioId: "start-monday", timeIncrease: 15}
        ],
        random: false
    },
    {
        id: "start-monday",
        scenario: "Start",
        prompt: "What to do first?",
        options: [
            {option: "Work on ticket", energy: -10, scenarioId: "debugging-monday", timeIncrease: 10},
            {option: "Check email", energy: -10, scenarioId: "phishing-monday", timeIncrease: 60},
            {option: "Go Home", energy: -100, scenarioId: "home-monday", timeIncrease: 120},
            {option: "Poo", energy: +10, scenarioId: "bathroom-monday", timeIncrease: 60},
            {option: "Fire?", energy: -10, scenarioId: "fire-monday", timeIncrease: 60}
        ],
        random: false
    },
    {
        id: "phishing-monday",
        scenario: "Phishing",
        prompt: "You open outlook and find a new email from official@appl3.com: ",
        options: [
            {option: "I've been wanting a new iPhone for ages! Click link.", energy: -10, scenarioId: "phished-monday", timeIncrease: 30},
            {option: "Hmm very sus. Report and forward to IT.", energy: -10, scenarioId: "meeting-monday", timeIncrease: 30},
            {option: "Oh no, your laptop must have been infected by a deadly virus. Burn it asap.", energy: -50, scenarioId: "destruction-monday", timeIncrease: 60}
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
    },
    {
        id: "fire-monday",
        scenario: "Fire",
        prompt: "The fire alarm just went off and everything's evacuating!",
        options: [
            {option: "Follow everyone!", energy: -20, scenarioId: "evacuated", timeIncrease: 100},
            {option: "It's probably a drill, even though those never takes place on Mondays...Chill.", energy: -100, scenarioId: "fiery_death", timeIncrease: 0}],
            random: false
    }
];