import { greeting, game } from '../index.js';
import { getQuestion } from './getQuestion.js';
import { getQuestionAndAnswer } from './getQuestionAndAnswer.js';

function brainGame() {
    const nameUser = greeting('What number is missing in the progression?');

    for (let i = 0; i < 3; i += 1) {
        const questionAndAnswer = getQuestionAndAnswer();
        const question = getQuestion(questionAndAnswer[0]);
        const correctAnswer = questionAndAnswer[1];
        const result = game(question, correctAnswer, nameUser);
        if (!result) break;
        if (i === 2) console.log(`Congratulations, ${nameUser}!`);
    };
};

export {brainGame};
