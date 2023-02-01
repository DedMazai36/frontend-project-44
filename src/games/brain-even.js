import { gameEngine, generateAllRound, getRandom } from './index.js';

const generateRound = () => {
  const num = getRandom(0, 100);
  const question = `${num}`;
  const answer = (num % 2 === 0) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameEngine(gameDescription, generateAllRound(generateRound));
};
