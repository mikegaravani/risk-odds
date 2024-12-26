// Round 3 dice vs 3 dice

const DIE_SIDES = 6;

let redWinsHighestProbability = 0;
let redWinsMiddleProbability = 0;
let redWinsLowestProbability = 0;

// 3 dice rolled: probability of die outcomes
const highestDieProbabilities = [
  1 / 216, // Probability of highest die outcome being 1
  7 / 216, // Probability of highest die outcome being 2
  19 / 216, // Probability of highest die outcome being 3
  37 / 216, // Probability of highest die outcome being 4
  61 / 216, // Probability of highest die outcome being 5
  91 / 216, // Probability of highest die outcome being 6
];
const middleDieProbabilities = [
  16 / 216, // Probability of middle die outcome being 1
  40 / 216, // Probability of middle die outcome being 2
  52 / 216, // Probability of middle die outcome being 3
  52 / 216, // Probability of middle die outcome being 4
  40 / 216, // Probability of middle die outcome being 5
  16 / 216, // Probability of middle die outcome being 6
];
const lowestDieProbabilities = [
  91 / 216, // Probability of lowest die outcome being 1
  61 / 216, // Probability of lowest die outcome being 2
  37 / 216, // Probability of lowest die outcome being 3
  19 / 216, // Probability of lowest die outcome being 4
  7 / 216, // Probability of lowest die outcome being 5
  1 / 216, // Probability of lowest die outcome being 6
];

for (let red = 0; red < DIE_SIDES; red++) {
  for (let blue = 0; blue < DIE_SIDES; blue++) {
    if (red > blue) {
      redWinsHighestProbability +=
        highestDieProbabilities[red] * highestDieProbabilities[blue];
      redWinsMiddleProbability +=
        middleDieProbabilities[red] * middleDieProbabilities[blue];
      redWinsLowestProbability +=
        lowestDieProbabilities[red] * lowestDieProbabilities[blue];
    }
  }
}

const redWins3Dice =
  redWinsHighestProbability *
  redWinsMiddleProbability *
  redWinsLowestProbability;

const redWins2Dice =
  redWinsHighestProbability *
    redWinsMiddleProbability *
    (1 - redWinsLowestProbability) +
  redWinsHighestProbability *
    redWinsLowestProbability *
    (1 - redWinsMiddleProbability) +
  redWinsMiddleProbability *
    redWinsLowestProbability *
    (1 - redWinsHighestProbability);

const redWins1Die =
  redWinsHighestProbability *
    (1 - redWinsMiddleProbability) *
    (1 - redWinsLowestProbability) +
  redWinsMiddleProbability *
    (1 - redWinsHighestProbability) *
    (1 - redWinsLowestProbability) +
  redWinsLowestProbability *
    (1 - redWinsHighestProbability) *
    (1 - redWinsMiddleProbability);

const redWins0Dice =
  (1 - redWinsHighestProbability) *
  (1 - redWinsMiddleProbability) *
  (1 - redWinsLowestProbability);

export const outcomes3V3 = [
  redWins3Dice,
  redWins2Dice,
  redWins1Die,
  redWins0Dice,
];
