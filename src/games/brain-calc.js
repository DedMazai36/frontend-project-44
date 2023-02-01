import { gameEngine, getRandom } from './index.js';

function getAnswer(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 0;
  }

  return result;
}

const generateRound = () => {
  const collOperators = ['+', '-', '*'];
  const operator = collOperators[getRandom(0, 2)];
  const num1 = getRandom();
  const num2 = getRandom();

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getAnswer(num1, num2, operator));

  return [question, answer];
};

export default () => {
  const gameDescription = 'What is the result of the expression?';

  gameEngine(gameDescription, generateRound);
};
