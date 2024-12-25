// Round 3 dice vs 2 dice

const DIE_SIDES = 6;

let redWinsHighestProbability = 0;
let redWinsMiddleProbability = 0;

// 3 dice rolled: probability of die outcomes
const highestDieProbabilities3 = [
  1 / 216, // Probability of highest die outcome being 1
  7 / 216, // Probability of highest die outcome being 2
  19 / 216, // Probability of highest die outcome being 3
  37 / 216, // Probability of highest die outcome being 4
  61 / 216, // Probability of highest die outcome being 5
  91 / 216, // Probability of highest die outcome being 6
];
const middleDieProbabilities3 = [
  16 / 216, // Probability of middle die outcome being 1
  40 / 216, // Probability of middle die outcome being 2
  52 / 216, // Probability of middle die outcome being 3
  52 / 216, // Probability of middle die outcome being 4
  40 / 216, // Probability of middle die outcome being 5
  16 / 216, // Probability of middle die outcome being 6
];

// 2 dice rolled: probability of die outcomes
const highestDieProbabilities2 = [
  1 / 36, // Probability of highest die outcome being 1
  3 / 36, // Probability of highest die outcome being 2
  5 / 36, // Probability of highest die outcome being 3
  7 / 36, // Probability of highest die outcome being 4
  9 / 36, // Probability of highest die outcome being 5
  11 / 36, // Probability of highest die outcome being 6
];
const lowestDieProbabilities2 = [
  11 / 36, // Probability of lowest die outcome being 1
  9 / 36, // Probability of lowest die outcome being 2
  7 / 36, // Probability of lowest die outcome being 3
  5 / 36, // Probability of lowest die outcome being 4
  3 / 36, // Probability of lowest die outcome being 5
  1 / 36, // Probability of lowest die outcome being 6
];

for (let red = 0; red < DIE_SIDES; red++) {
  for (let blue = 0; blue < DIE_SIDES; blue++) {
    if (red > blue) {
      redWinsHighestProbability +=
        highestDieProbabilities3[red] * highestDieProbabilities2[blue];
      redWinsMiddleProbability +=
        middleDieProbabilities3[red] * lowestDieProbabilities2[blue];
    }
  }
}

const redWins2Dice = redWinsHighestProbability * redWinsMiddleProbability;

const redWins1Die =
  redWinsHighestProbability * (1 - redWinsMiddleProbability) +
  redWinsMiddleProbability * (1 - redWinsHighestProbability);

const redWins0Dice =
  (1 - redWinsHighestProbability) * (1 - redWinsMiddleProbability);

export const outcomes3v2 = [
  { value: redWins2Dice, description: "Red wins all 2 dice" },
  { value: redWins1Die, description: "Red wins 1 die, loses 1" },
  { value: redWins0Dice, description: "Red loses all 2 dice" },
];
