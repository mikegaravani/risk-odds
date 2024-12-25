// Round 2 dice vs 1 die

const DIE_SIDES = 6;

let redWinsHighestProbability = 0;

// 2 dice rolled: probability of die outcomes
const highestDieProbabilities2 = [
  1 / 36, // Probability of highest die outcome being 1
  3 / 36, // Probability of highest die outcome being 2
  5 / 36, // Probability of highest die outcome being 3
  7 / 36, // Probability of highest die outcome being 4
  9 / 36, // Probability of highest die outcome being 5
  11 / 36, // Probability of highest die outcome being 6
];

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
        highestDieProbabilities2[red] * dieProbabilities1[blue];
    }
  }
}

const redWins1Die = redWinsHighestProbability;

const redWins0Dice = 1 - redWins1Die;

export const round2V1 = [
  { value: redWins1Die, description: "Red wins the 1 die" },
  { value: redWins0Dice, description: "Red loses the 1 die" },
];