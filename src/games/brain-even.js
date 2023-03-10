import { gameEngine, getRandom } from './index.js';

const generateRound = () => {
  const num = getRandom(0, 100);
  const question = String(num);
  const answer = (num % 2 === 0) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameEngine(gameDescription, generateRound);
};
