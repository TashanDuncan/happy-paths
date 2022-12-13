export const gameConfig = [
  {
    id: 1,
    scenario: "Stand up",
    prompt: "Talk about board?",
    options: {
      "": -10
    }
  },
  {
    id:2,
    scenario: "Start",
    prompt: "What to do first?",
    options: {
      "Check Slack" : -5,
      "Poo" : +10,
      "Go Home": -100
    },
    random: false,
  },
  {
    id:3,
    scenario: "Check Slack",
    possibleNextEvent: [5,6,7,8]
    // backend event
  },
  {
    id:10,

  },
  {
  },
  {
    scenario: "Poo",
    prompt: "The dragon breathes fire!",
    options: ["Duck", "Jump"],
    energy: -10
  },
  {
    scenario: "Duck",
    prompt: "The dragon breathes fire!",
    options: ["Run", "Jump"],
    energy: -10
  },
  {
    scenario: "Fire",
    prompt: "The fire alarm just went off!",
    options: ["Run", "Chill, it's probably just a drill."]
  }
];