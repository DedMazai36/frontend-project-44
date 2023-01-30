import { gameIndex, generateAllRound } from '../index.js';
import getQuestion from './getQuestion.js';
import getCorrectAnswer from './getCorrectAnswer.js';

const gameEngine = () => {
  const gameDescription = 'What is the result of the expression?';

  gameIndex(gameDescription, generateAllRound(getQuestion, getCorrectAnswer));
};

export default gameEngine;
