import {getAnswer} from './readLine.js';

const greeting = (gameRules) => {
    console.log('Welcome to the Brain Games!');
    const nameUser = getAnswer('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(gameRules);
    return nameUser;
};

const game = (question, correctAnswer, nameUser) => {
    console.log(`Question: ${question}`);
    const answerUser = getAnswer('Your answer: ');
    const result = answerUser === correctAnswer ? true : false;

    if (result) {
        console.log('Correct!');
    } else {
        console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${nameUser}!`);
    }

    return result;
};

export {greeting, game};
