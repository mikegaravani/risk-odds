// Round 3 dice vs 3 dice

// 3 dice rolled: probability of die outcomes

const DIE_SIDES = 6;

let redWinsHighestProbability = 0;
let blueWinsHighestProbability = 0;

let redWinsMiddleProbability = 0;
let blueWinsMiddleProbability = 0;

let redWinsLowestProbability = 0;
let blueWinsLowestProbability = 0;

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

// First round: HIGHEST die vs HIGHEST die
for (let red = 0; red < DIE_SIDES; red++) {
  for (let blue = 0; blue < DIE_SIDES; blue++) {
    if (red > blue) {
      redWinsHighestProbability +=
        highestDieProbabilities[red] * highestDieProbabilities[blue];
      redWinsMiddleProbability +=
        middleDieProbabilities[red] * middleDieProbabilities[blue];
      redWinsLowestProbability +=
        lowestDieProbabilities[red] * lowestDieProbabilities[blue];
    } else {
      blueWinsHighestProbability +=
        highestDieProbabilities[red] * highestDieProbabilities[blue];
      blueWinsMiddleProbability +=
        middleDieProbabilities[red] * middleDieProbabilities[blue];
      blueWinsLowestProbability +=
        lowestDieProbabilities[red] * lowestDieProbabilities[blue];
    }
  }
}

console.log(redWinsHighestProbability * 100 + blueWinsHighestProbability * 100);
console.log(redWinsMiddleProbability * 100 + blueWinsMiddleProbability * 100);
console.log(redWinsLowestProbability * 100 + blueWinsLowestProbability * 100);
