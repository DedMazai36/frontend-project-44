import { gameEngine, generateAllRound, getRandom } from './index.js';

const generateRound = () => {
  const num = getRandom(0, 100);
  let answer = 'yes';
  const question = `${num}`;

  if (num < 2) {
    answer = 'no';
  } else {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        answer = 'no';
        break;
      }
    }
  }

  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameEngine(gameDescription, generateAllRound(generateRound));
};
