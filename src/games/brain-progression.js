import { gameEngine, generateAllRound, getRandom } from './index.js';

const generateRound = () => {
  const collNumbers = [];
  const step = getRandom(1, 9);

  collNumbers.push(getRandom(0, 50));

  const iMax = getRandom(5, 12);

  for (let i = 1; i <= iMax; i += 1) {
    collNumbers.push(collNumbers[i - 1] + step);
  }

  const randomIndex = getRandom(0, iMax);
  const answer = `${collNumbers[randomIndex]}`;

  collNumbers[randomIndex] = '..';

  let question = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const number of collNumbers) {
    question += `${number} `;
  }

  question = question.slice(0, -1);

  return [question, answer];
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  gameEngine(gameDescription, generateAllRound(generateRound));
};
