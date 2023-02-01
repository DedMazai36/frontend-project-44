import { gameEngine, getRandom } from './index.js';

function isNumberPrime(num) {
  let answer = 'yes';

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

  return answer;
}

const generateRound = () => {
  const num = getRandom(0, 100);
  const question = String(num);
  const answer = isNumberPrime(num);

  return [question, answer];
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameEngine(gameDescription, generateRound);
};
