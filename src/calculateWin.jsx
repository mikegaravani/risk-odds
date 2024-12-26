import { outcomes1V1 } from "./rounds/round1V1";
import { outcomes1V2 } from "./rounds/round1V2";
import { outcomes1V3 } from "./rounds/round1V3";
import { outcomes2V1 } from "./rounds/round2V1";
import { outcomes2V2 } from "./rounds/round2V2";
import { outcomes2V3 } from "./rounds/round2V3";
import { outcomes3V1 } from "./rounds/round3V1";
import { outcomes3V2 } from "./rounds/round3V2";
import { outcomes3V3 } from "./rounds/round3V3";

const outcomesMap = {
  outcomes1V1,
  outcomes1V2,
  outcomes1V3,
  outcomes2V1,
  outcomes2V2,
  outcomes2V3,
  outcomes3V1,
  outcomes3V2,
  outcomes3V3,
};

let likelihoodRows = 100;
let likelihoodCols = 100;
let likelihoodMatrix = new Array(likelihoodRows)
  .fill(null)
  .map(() => new Array(likelihoodCols).fill(-1));

likelihoodMatrix[0] = new Array(likelihoodCols).fill(0);
for (let i = 0; i < likelihoodRows; i++) {
  likelihoodMatrix[i][0] = 1;
}
likelihoodMatrix[0][0] = 0;

function calculateLikelihood(redArmies, blueArmies) {
  if (likelihoodMatrix[redArmies][blueArmies] !== -1) {
    return likelihoodMatrix[redArmies][blueArmies];
  } else {
    const redArmiesToConsider = redArmies > 3 ? 3 : redArmies;
    const blueArmiesToConsider = blueArmies > 3 ? 3 : blueArmies;
    const minIndex = Math.min(redArmiesToConsider, blueArmiesToConsider);
    const key = `outcomes${redArmiesToConsider}V${blueArmiesToConsider}`;
    const outcomes = outcomesMap[key];

    if (minIndex === 1) {
      likelihoodMatrix[redArmies][blueArmies] =
        calculateLikelihood(redArmies, blueArmies - minIndex) * outcomes[2] +
        calculateLikelihood(redArmies - minIndex, blueArmies) * outcomes[3];
    } else if (minIndex === 2) {
      likelihoodMatrix[redArmies][blueArmies] =
        calculateLikelihood(redArmies, blueArmies - minIndex) * outcomes[1] +
        calculateLikelihood(redArmies - 1, blueArmies - 1) * outcomes[2] +
        calculateLikelihood(redArmies - minIndex, blueArmies) * outcomes[3];
    } else {
      likelihoodMatrix[redArmies][blueArmies] =
        calculateLikelihood(redArmies, blueArmies - minIndex) * outcomes[0] +
        calculateLikelihood(redArmies - 1, blueArmies - 2) * outcomes[1] +
        calculateLikelihood(redArmies - 2, blueArmies - 1) * outcomes[2] +
        calculateLikelihood(redArmies - minIndex, blueArmies) * outcomes[3];
    }

    return likelihoodMatrix[redArmies][blueArmies];
  }
}

export function calculateWin(redArmies, blueArmies) {
  if (redArmies < 0 || blueArmies < 0 || redArmies > 99 || blueArmies > 99) {
    return "Invalid input";
  }
  if (redArmies === 0) {
    return 0;
  }
  const actualRedArmies = redArmies - 1;

  const winningAverage = calculateLikelihood(actualRedArmies, blueArmies) * 100;
  const roundedWinningAverage = parseFloat(winningAverage.toFixed(2));

  return roundedWinningAverage;
}
