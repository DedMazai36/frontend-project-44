import { gameIndex } from '../index.js';
import { getQuestion } from './getQuestion.js';
import { getQuestionAndAnswer } from './getQuestionAndAnswer.js';

const generateAllRound = () => {
    const result = [];
    for (let i = 0; i < 3; i += 1) {
        const questionAndAnswer = getQuestionAndAnswer();
        const question = getQuestion(questionAndAnswer[0]);
        const correctAnswer = questionAndAnswer[1];
        result.push(question);
        result.push(correctAnswer);
    }

    return result;
};

const gameEngine = () => {
    const gameDescription = 'What number is missing in the progression?';

    gameIndex(gameDescription, generateAllRound());
};

export {gameEngine};
