interface GameConfig {
  id: number;
  scenario: string;
  prompt?: string;
  options: { [key: string]: number};
  random: boolean;
  timeIncrease: number
}

export const gameConfig: GameConfig[] = [
  {
    id: 1,
    scenario: "Stand up",
    prompt: "Talk about board?",
    options: {
      "": -10
    },
    random: false,
    timeIncrease: 30
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
    timeIncrease: 30

  },
  // {
  //   id:3,
  //   scenario: "Check Slack",
  //   possibleNextEvent: [5,6,7,8]
  //   // backend event
  // },
];