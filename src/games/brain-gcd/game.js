import { gameIndex, generateAllRound } from '../index.js';
import getQuestion from './getQuestion.js';
import getCorrectAnswer from './getCorrectAnswer.js';

const gameEngine = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  gameIndex(gameDescription, generateAllRound(getQuestion, getCorrectAnswer));
};

export default gameEngine;
