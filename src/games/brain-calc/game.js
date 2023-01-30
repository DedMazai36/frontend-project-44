import { gameIndex } from '../index.js';
import { getQuestion } from './getQuestion.js';
import { getCorrectAnswer } from './getCorrectAnswer.js';

const generateAllRound = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
        const question = getQuestion();
        const correctAnswer = getCorrectAnswer(question);
        result.push(question);
        result.push(correctAnswer);
    }

    return result;
};

const gameEngine = () => {
    const gameDescription = 'What is the result of the expression?';

    gameIndex(gameDescription, generateAllRound());
};

export {gameEngine};