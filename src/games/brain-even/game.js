import { greeting, game } from '../index.js';
import { getQuestion } from './getQuestion.js';
import { getCorrectAnswer } from './getCorrectAnswer.js';

function brainGame() {
    const nameUser = greeting('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const question = getQuestion();
        const correctAnswer = getCorrectAnswer(question);
        const result = game(question, correctAnswer, nameUser);
        if (!result) break;
        if (i === 2) console.log(`Congratulations, ${nameUser}!`);
    };
};

export {brainGame};
