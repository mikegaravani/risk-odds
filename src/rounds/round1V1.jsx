// Round 3 dice vs 2 dice

const DIE_SIDES = 6;

let redWinsHighestProbability = 0;

// 1 die rolled: probability of die outcomes
const dieProbabilities1 = [
  1 / 6, // Probability of die outcome being 1
  1 / 6, // Probability of die outcome being 2
  1 / 6, // Probability of die outcome being 3
  1 / 6, // Probability of die outcome being 4
  1 / 6, // Probability of die outcome being 5
  1 / 6, // Probability of die outcome being 6
];

for (let red = 0; red < DIE_SIDES; red++) {
  for (let blue = 0; blue < DIE_SIDES; blue++) {
    if (red > blue) {
      redWinsHighestProbability +=
        dieProbabilities1[red] * dieProbabilities1[blue];
    }
  }
}

const redWins1Die = redWinsHighestProbability;

const redWins0Dice = 1 - redWinsHighestProbability;

export const outcomes1V1 = [0, 0, redWins1Die, redWins0Dice];
