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
    prompt:
      `First thing's first, your daily stand up. 
      Hold on, another team has taken over the lab where you normally have YOUR stand up! 
      What do you do?`,
    options: [
      {
        option:
          "I guess they were there first...Join on Teams, but look forlornly towards the direction of the lab so they'd feel guilty.",
        energy: -10,
        scenarioId: "clap-monday",
        timeIncrease: 15,
      },
      {
        option: "Forcibly remove them.",
        energy: -20,
        scenarioId: "failed-removal-monday",
        timeIncrease: 15,
      },
      {
        option: "Look for somewhere else",
        energy: -20,
        scenarioId: "failed-to-find-monday",
        timeIncrease: 15,
      },
    ],
    type: "normal",
  },
  {
    id: "failed-removal-monday",
    scenario: "Failed removal",
    prompt:
      `You angrily march towards the lab, but tripped on a stray cable and fell in front of everyone. 
      Humiliated, you crawl back to your seat and decide maybe Teams wouldn't be the worst idea after all.`,
    options: [
      {
        option: "Pretend nothing's happend.",
        energy: 0,
        scenarioId: "clap-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "failed-to-find-monday",
    scenario: "Failed to find",
    prompt:
      `You checked the other labs on the floor, but everywhere's full. 
      How?? No one's normally in on Mondays! Fine, to Teams it is. You're only...um...14 minutes late.`,
    options: [
      {
        option: "Open Teams.",
        energy: 0,
        scenarioId: "clap-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "clap-monday",
    scenario: "Stand up",
    prompt:
      `Your team ends every stand up with a clap. It's something to do with team bonding and it's not weird at all. 
      Definitely not cult like. Nope. Not at all. On 4...`,
    options: [
      {
        option: "1...",
        energy: -10,
        scenarioId: "bad-clap-start-monday",
        timeIncrease: 0,
      },
      {
        option: "2...",
        energy: -10,
        scenarioId: "bad-clap-start-monday",
        timeIncrease: 0,
      },
      {
        option: "3...",
        energy: -10,
        scenarioId: "bad-clap-start-monday",
        timeIncrease: 0,
      },
      {
        option: "4!",
        energy: +5,
        scenarioId: "good-clap-start-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "bad-clap-start-monday",
    scenario: "Start",
    prompt:
      "On FOUR! That was a terrible clap and your day's ruined. Right, what do you want to do first?",
    options: [
      {
        option: "Check email",
        energy: -10,
        scenarioId: "phishing-monday",
        timeIncrease: 30,
      },
      {
        option: "Go Home",
        energy: 0,
        scenarioId: "home-monday",
        timeIncrease: 0,
      },
      {
        option: "Poo",
        energy: +10,
        scenarioId: "bathroom-monday",
        timeIncrease: 5,
      },
    ],
    type: "normal",
  },
  {
    id: "good-clap-start-monday",
    scenario: "Start",
    prompt:
      "That was a great clap, you feel energised! Right, what do you want to do first?",
    options: [
      {
        option: "Check email",
        energy: -10,
        scenarioId: "phishing-monday",
        timeIncrease: 30,
      },
      {
        option: "Go Home",
        energy: 0,
        scenarioId: "home-monday",
        timeIncrease: 0,
      },
      {
        option: "Poo",
        energy: +10,
        scenarioId: "bathroom-monday",
        timeIncrease: 5,
      },
    ],
    type: "normal",
  },
  {
    id: "bathroom-monday",
    scenario: "Poo",
    prompt:
      "You feel a sense of relief. Heading back to your desk, you saw you got a new email.",
    options: [
      {
        option: "Read email",
        energy: -10,
        scenarioId: "phishing-monday",
        timeIncrease: 10,
      },
    ],
    type: "normal",
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
      {
        option: "I've been wanting a new iPhone for ages! Click link.",
        energy: -10,
        scenarioId: "phished-monday",
        timeIncrease: 30,
      },
      {
        option: "Hmm very sus. Report and forward to IT.",
        energy: -10,
        scenarioId: "not-phished-monday",
        timeIncrease: 30,
      },
      {
        option:
          "Oh no, your laptop must be possessed by a deadly virus. Burn it asap.",
        energy: -50,
        scenarioId: "destruction-monday",
        timeIncrease: 30,
      },
    ],
    type: "normal",
  },
  {
    id: "not-phished-monday",
    scenario: "Not Phished",
    prompt:
      `Turns out it was all a test! And you passed. 
      Generic UK No. 1 Automotive Classified Advertising Company is very proud of you. Yay.`,
    options: [
      {
        option: "I'm awesome :)",
        energy: 0,
        scenarioId: "meeting-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "phished-monday",
    scenario: "Phished",
    prompt:
      `Turns out it was all a test! And you failed. 
      Generic UK No. 1 Automotive Classified Advertising Company is very disappointed in you. Boo.`,
    options: [
      {
        option: "aw :(",
        energy: 0,
        scenarioId: "meeting-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "destruction-monday",
    scenario: "Destruction",
    prompt:
      "Um...no. The laptop was not possessed and you just destroyed company property. Shame on you.",
    options: [
      {
        option: "Are you sure about that?",
        energy: 0,
        scenarioId: "meeting-monday",
        timeIncrease: 0,
      },
      {
        option: "Oh no, you're possessed too!",
        energy: 0,
        scenarioId: "meeting-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "meeting-monday",
    scenario: "Meeting",
    prompt:
      `New to the job, you just realised all the meeting rooms are named after cars... 
      Your next meeting is in 10 mins, can you remember which room it's in?`,
    options: [
      {
        option: "Give it a go!",
        energy: -20,
        scenarioId: "memory-game-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "memory-game-monday",
    scenario: "Memory game",
    prompt: "somehow implement mini game here",
    options: [
      {
        option: "Next",
        energy: 0,
        scenarioId: "lunch-monday",
        timeIncrease: 120,
      },
    ],
    type: "mini-game",
  },
  {
    id: "lunch-monday",
    scenario: "Lunch",
    prompt:
      `What a productive meeting! You understood very little of it, but you sensed a productive vibe. 
      Even though you want nothing more to get straight back to work, it's lunch time now.
      Should you go for...?`,
    options: [
      {
        option: "A Sainsbury's meal deal",
        energy: +30,
        scenarioId: "fire-monday",
        timeIncrease: 60,
      },
      {
        option: "PaxterStorey",
        energy: +40,
        scenarioId: "fire-monday",
        timeIncrease: 60,
      },
      {
        option: "It's treat Monday, let's go somewhere nice.",
        energy: +50,
        scenarioId: "fire-monday",
        timeIncrease: 60,
      },
    ],
    type: "normal",
  },
  {
    id: "fire-monday",
    scenario: "Fire",
    prompt:
      `That was a nice meal, let's get back to work. Wait, what's that sound? 
      The fire alarm just went off and everyone's evacuating!`,
    options: [
      {
        option: "Follow everyone!",
        energy: -20,
        scenarioId: "evacuate-monday",
        timeIncrease: 60,
      },
      {
        option:
          `Call 0118 999 881 99 9119 725 3`,
          energy: -20,
          scenarioId: "call-then-evacuate-monday",
          timeIncrease: 0
      },
      {
        option:
          "It's probably a drill, even though those never takes place on Mondays...Chill.",
        energy: -100,
        scenarioId: "fiery-death-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "evacuate-monday",
    scenario: "Evacuated",
    prompt:
      "Turns out there really was a fire! Apparently someone tried to burn up a possessed laptop :/",
    options: [
      {
        option: "Head back to the office",
        energy: 0,
        scenarioId: "ticket-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "call-then-evacuate-monday",
    scenario: "Evacuated",
    prompt:
      `No one answered the call, so you decided to evacuate with everyone else.
      Good thing you did. Turns out there really was a fire! 
      Apparently someone tried to burn up a possessed laptop :/`,
    options: [
      {
        option: "Head back to the office",
        energy: 0,
        scenarioId: "ticket-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "fiery-death-monday",
    scenario: "Fiery death",
    prompt:
      `Turns out there really was a fire! Apparently someone tried to burn up a possessed laptop :/ 
      You really should've got out when you had the chance...`,
    type: "game-over",
  },
  {
    id: "ticket-monday",
    scenario: "Ticket",
    prompt:
      `Now that you've survived a fire, it's finally time to work on your ticket. 
      The legacy codebase you're working on is full of bugs. Fix as many you can!`,
    options: [
      {
        option: "Start!",
        energy: 0,
        scenarioId: "debugging-game-monday",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "debugging-game-monday",
    scenario: "Debugging game",
    prompt: "somehow implement mini game here",
    options: [
      {
        option: "Next",
        energy: -20,
        scenarioId: "slack-monday",
        timeIncrease: 60,
      },
    ],
    type: "mini-game",
  },
  {
    id: "slack-monday",
    scenario: "Slack",
    prompt:
      `Check this out. Someone just posted on Slack. 
      Your company's test driver just called off sick, the company is asking if you want to help them test out a new vehicle!`,
    options: [
      {
        option: "Heck yeah! I can totally drive without running into things.",
        energy: 0,
        scenarioId: "driving-game-monday",
        timeIncrease: 60,
      },
    ],
    type: "normal",
  },
  {
    id: "driving-game-monday",
    scenario: "Driving game",
    prompt: "Implement mini game here",
    options: [
      {
        option: "Next",
        energy: -20,
        scenarioId: "final-task-monday",
        timeIncrease: 60,
      },
    ],
    type: "mini-game",
  },
  {
    id: "final-task-monday",
    scenario: "Stay late",
    prompt:
      "It's past 5 and most people are heading off, but you still have bugs to fix...",
    options: [
      {
        option: "Stay and finish off debugging",
        energy: 50,
        scenarioId: "win-screen",
        timeIncrease: 120,
      },
      {
        option: "Go home and relax",
        energy: 0,
        scenarioId: "win-screen",
        timeIncrease: 0,
      },
    ],
    type: "normal",
  },
  {
    id: "home-monday",
    scenario: "Slack",
    prompt:
      `What a day. You choose to go home, forgetting that it was a fixed working day and not a flex day. 
      Connected working is in more than you're out...with that being said. You're FIRED!`,
    type: "game-over",
  },
  {
    id: "no-energy",
    scenario: "no-energy",
    prompt: "You're out of energy :(",
    type: "game-over",
  },
];
