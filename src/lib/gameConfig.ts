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
    {
        id: "stand-up-monday",
        scenario: "Stand up",
        prompt: "Talk about board?",
        options: [
            {option: "Option 1", energy: -10, scenarioId: "clap-monday", timeIncrease: 15},
            {option: "Option 2", energy: -10, scenarioId: "clap-monday", timeIncrease: 15}
        ],
        type: "normal"
    },
    {
        id: "clap-monday",
        scenario: "Stand up",
        prompt: "Your team ends every stand up with a clap. It's something to do with team bonding and it's not weird at all. Definitely not cult like. Nope. Not at all. On 4...",
        options: [
            {option: "1...", energy: -20, scenarioId: "bad-clap-start-monday", timeIncrease: 15},
            {option: "2...", energy: -20, scenarioId: "bad-clap-start-monday", timeIncrease: 15},
            {option: "3...", energy: -20, scenarioId: "bad-clap-start-monday", timeIncrease: 15},
            {option: "4!", energy: +5, scenarioId: "good-clap-start-monday", timeIncrease: 15}
        ],
        type: "normal"
    },
    {
        id: "bad-clap-start-monday",
        scenario: "Start",
        prompt: "On FOUR! That was a terrible clap and your day's ruined. Right, what do you want to do first?",
        options: [
            {option: "Work on ticket", energy: -10, scenarioId: "ticket-monday", timeIncrease: 10},
            {option: "Check email", energy: -10, scenarioId: "phishing-monday", timeIncrease: 60},
            {option: "Go Home", energy: -100, scenarioId: "home-monday", timeIncrease: 0},
            {option: "Poo", energy: +10, scenarioId: "bathroom-monday", timeIncrease: 60},
        ],
        type: "normal"
    },
    {
        id: "good-clap-start-monday",
        scenario: "Start",
        prompt: "That was a great clap, you feel energised! Right, what do you want to do first?",
        options: [
            {option: "Work on ticket", energy: -10, scenarioId: "ticket-monday", timeIncrease: 10},
            {option: "Check email", energy: -10, scenarioId: "phishing-monday", timeIncrease: 60},
            {option: "Go Home", energy: -100, scenarioId: "home-monday", timeIncrease: 0},
            {option: "Poo", energy: +10, scenarioId: "bathroom-monday", timeIncrease: 60},
        ],
        type: "normal"
    },
    {
        id: "bathroom-monday",
        scenario: "Poo",
        prompt: "You feel a sense of relief. Heading back to your desk, you saw you got a new email.",
        options: [
            {option: "Read email", energy: -10, scenarioId: "phishing-monday", timeIncrease: 10},
        ],
        type: "normal"
    },
    {
        id: "ticket-monday",
        scenario: "Ticket",
        prompt: "The legacy codebase you're working on is full of bugs! Fix as many you can before lunch.",
        options: [
            {option: "Start!", energy: 0, scenarioId: "debugging-game-monday", timeIncrease: 0 },
        ],
        type: "normal"
    },
    {
        id: "debugging-game-monday",
        scenario: "Debugging game",
        prompt: "somehow implement mini game here",
        options: [
            {option: "Next", energy: -40, scenarioId: "lunch-after-debugging-monday", timeIncrease: 120 },
        ],
        type: "mini-game"
    },
    {
        id: "phishing-monday",
        scenario: "Phishing",
        prompt: `You open outlook and find a new email from official@appl3.com:
        Dear Customer,
Plz send bank info for brand new iPhone 100.
Thank,
Official Appl3`,
        options: [
            {option: "I've been wanting a new iPhone for ages! Click link.", energy: -10, scenarioId: "phished-monday", timeIncrease: 30},
            {option: "Hmm very sus. Report and forward to IT.", energy: -10, scenarioId: "not-phished-monday", timeIncrease: 30},
            {option: "Oh no, your laptop must be possessed by a deadly virus. Burn it asap.", energy: -50, scenarioId: "destruction-monday", timeIncrease: 60}
        ],
        type: "normal"
    },
    {
        id: "not-phished-monday",
        scenario: "Not Phished",
        prompt: "Turns out it was all a test! And you passed. Generic automotive advertising company is very proud of you. Yay.",
        options: [
            {option: "aw :(", energy: 0, scenarioId: "meeting-monday", timeIncrease: 0 }
        ],
        type: "normal"
    },
    {
        id: "phished-monday",
        scenario: "Phished",
        prompt: "Turns out it was all a test! And you failed. Generic automotive advertising company is very disappointed in you. Boo.",
        options: [
            {option: "aw :(", energy: 0, scenarioId: "meeting-monday", timeIncrease: 0 }
        ],
        type: "normal"
    },
    {
        id: "destruction-monday",
        scenario: "Destruction",
        prompt: "Um...no. The laptop was not possessed and you just destroyed company property. Shame on you.",
        options: [
            {option: "Are you sure about that?", energy: 0, scenarioId: "meeting-monday", timeIncrease: 0 },
            {option: "Oh no, you're possessed too!", energy: 0, scenarioId: "meeting-monday", timeIncrease: 0 }
        ],
        type: "normal"
    },
    {
        id: "meeting-monday",
        scenario: "Meeting",
        prompt: "New to the job, you just realised all the meeting rooms are named after cars... Your next meeting is in 10 mins, can you remember which room it's in?",
        options: [
            {option: "Give it a go!", energy: -10, scenarioId: "memory-game-monday", timeIncrease: 0 },
        ],
        type: "normal"
    },
    {
        id: "memory-game-monday",
        scenario: "Memory game",
        prompt: "somehow implement mini game here",
        options: [
            {option: "Next", energy: 0, scenarioId: "lunch-after-meeting-monday", timeIncrease: 0 },
        ],
        type: "mini-game"
    },
    {
        id: "lunch-after-debugging-monday",
        scenario: "Lunch",
        prompt: "What a productive Monday morning! Now what should we get for lunch?",
        options: [
            {option: "Sainsbury's meal deal", energy: +20, scenarioId: "fire-monday", timeIncrease: 60 },
            {option: "PaxterStorey", energy: +40, scenarioId: "fire-monday", timeIncrease: 60 },
            {option: "It's treat Monday, let's go somewhere nice.", energy: +50, scenarioId: "fire-monday", timeIncrease: 60 },
        ],
        type: "normal"
    },
    {
        id: "lunch-after-meeting-monday",
        scenario: "Lunch",
        prompt: "Good meeting! Now what should we get for lunch?",
        options: [
            {option: "Sainsbury's meal deal", energy: +20, scenarioId: "fire-monday", timeIncrease: 60 },
            {option: "PaxterStorey", energy: +40, scenarioId: "fire-monday", timeIncrease: 60 },
            {option: "It's treat Monday, let's go somewhere nice.", energy: +50, scenarioId: "fire-monday", timeIncrease: 60 },
        ],
        type: "normal"
    },
    {
        id: "fire-monday",
        scenario: "Fire",
        prompt: "That was a nice meal, let's get back to work. Wait, what's that sound? The fire alarm just went off and everyone's evacuating!",
        options: [
            {option: "Follow everyone!", energy: -20, scenarioId: "evacuated-monday", timeIncrease: 100},
            {option: "It's probably a drill, even though those never takes place on Mondays...Chill.", energy: -100, scenarioId: "fiery-death-monday", timeIncrease: 0}],
        type: "normal"
    },
    {
        id: "evacuated-monday",
        scenario: "Evacuated",
        prompt: "Turns out there really was a fire! Apparently someone tried to burn up a possessed laptop :/",
        options: [
            {option: "Head back to the office", energy: 0, scenarioId: "slack-monday", timeIncrease: 0 }],
        type: "normal"
    },
    {
        id: "fiery-death-monday",
        scenario: "Fiery death",
        prompt: "Turns out there really was a fire! Apparently someone tried to burn up a possessed laptop :/ You really should've got out when you had the chance...",
        type: "game-over"
    },
    {
        id: "slack-monday",
        scenario: "Slack",
        prompt: "Someone just posted on slack. Your company's test driver just called off sick, the company is asking if you want to help them test out a new vehicle!",
        options: [
            {option: "Heck yeah!", energy: 0, scenarioId: "driving-game-monday", timeIncrease: 120}
        ],
        type:"normal"
    },
    {
        id: "driving-game-monday",
        scenario: "Driving game",
        prompt: "Implement mini game here",
        options: [
        ],
        type:"mini-game"
    },
    {
      id: "home-monday",
      scenario: "Slack",
      prompt: "You go home, It was one of the fixed working days not flex working days. Remember connected working is in more than you're out. With that being said. You're Fired!",
      type:"game-over"
  },
];