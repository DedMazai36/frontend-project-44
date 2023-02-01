import { gameEngine, generateAllRound, getRandom } from './index.js';

const generateRound = () => {
  let num1 = getRandom(0, 50);
  let num2 = getRandom(0, 50);
  const question = `${num1} ${num2}`;

  while (num2) {
    const auxNumber = num2;
    num2 = num1 % num2;
    num1 = auxNumber;
  }

  const answer = `${num1}`;

  return [question, answer];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  gameEngine(gameDescription, generateAllRound(generateRound));
};
