import { gameIndex, generateAllRound } from '../index.js';
import getQuestion from './getQuestion.js';
import getCorrectAnswer from './getCorrectAnswer.js';

const gameEngine = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameIndex(gameDescription, generateAllRound(getQuestion, getCorrectAnswer));
};

export default gameEngine;
