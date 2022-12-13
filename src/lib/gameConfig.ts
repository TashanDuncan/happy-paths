export const gameConfig = [
  {
    choice: "Start",
    prompt: "What to do first?",
    options: {
      "Get Coffee" : +20,
      "Check Slack" : -5,
      "Poo" : +10,
      "Go Home": -100
    }
    //options: ["Get Coffee", "Check Slack", "Poo", "Go Home"],
    //energy: [+20, -5, +10, -100]
  },
  {
    choice: "Run",
    prompt: "There's a wall in front of you.",
    options: ["Climb", "Go around"],
    energy: -5
  },
  {
    choice: "Fight",
    prompt: "The dragon breathes fire!",
    options: ["Duck", "Jump"],
    energy: -10
  },
  {
    choice: "Poo",
    prompt: "The dragon breathes fire!",
    options: ["Run", "Jump"],
    energy: -10
  },
  {
    choice: "Fire",
    prompt: "The fire alarm just went off!",
    options: ["Run", "Chill, it's probably just a drill."]
  }
];