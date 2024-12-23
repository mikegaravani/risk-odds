// In a 1dice vs 1dice scenario, red wins 4166667% of the time
const redOdds1V1 = 15 / 36;

// Calculate the odds of a single dice roll
export function calculateAtomicOutcome(redArmies, blueArmies) {
  let untouchedRedArmies = 0;
  let untouchedBlueArmies = 0;
  if (redArmies > 3) {
    redArmies = 3;
    untouchedRedArmies = redArmies - 3;
  }
  if (blueArmies > 3) {
    blueArmies = 3;
    untouchedBlueArmies = blueArmies - 3;
  }

  const totalDice = redArmies + blueArmies;
  let redOdds = 0.5;
  if (totalDice === 6) {
    // Odds that 3-3 becomes 3-0
    // TODO ...
  } else if (redArmies === 3 && blueArmies === 2) {
  } else if (redArmies === 3 && blueArmies === 1) {
  } else if (redArmies === 2 && blueArmies === 3) {
  } else if (redArmies === 2 && blueArmies === 2) {
  } else if (redArmies === 2 && blueArmies === 1) {
  } else if (redArmies === 1) {
    throw new Error("Red can't attack with only 1 army");
  }
}
