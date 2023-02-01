import { gameEngine, getRandom } from './index.js';

const generateRound = () => {
  const arrayNumbers = [];
  const step = getRandom(1, 9);

  arrayNumbers.push(getRandom(0, 50));

  const progressionLength = getRandom(5, 12);
  const hiddenElementIndex = getRandom(1, progressionLength - 1);
  let hiddenElement = 0;

  for (let i = 1; i <= progressionLength; i += 1) {
    arrayNumbers.push(arrayNumbers[i - 1] + step);

    if (i === hiddenElementIndex) {
      hiddenElement = arrayNumbers.pop();
      arrayNumbers.push('..');
      arrayNumbers.push(hiddenElement + step);
      i += 1;
    }
  }

  const answer = String(hiddenElement);

  const question = arrayNumbers.join(' ');

  return [question, answer];
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  gameEngine(gameDescription, generateRound);
};
