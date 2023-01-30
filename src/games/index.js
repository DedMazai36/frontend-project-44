import {getAnswer} from './readLine.js';

const greeting = (gameRules) => {
    console.log('Welcome to the Brain Games!');
    const nameUser = getAnswer('May I have your name? ');
    console.log(`Hello, ${nameUser}!`);
    console.log(gameRules);
    return nameUser;
};

const generateRound = (question, correctAnswer, nameUser) => {
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

const gameIndex = (gameDescription, allRound) => {
    const nameUser = greeting(gameDescription);

    for (let i = 0; i < 5; i += 2) {
        const result = generateRound(allRound[i], allRound[i + 1], nameUser);
        if (!result) break;
        if (i === 4) console.log(`Congratulations, ${nameUser}!`);
    };
};

export {greeting, gameIndex};

