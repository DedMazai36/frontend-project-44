import getAnswer from './readLine.js';

function getRandom(min = 0, max = 50) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function generateAllRound(generateRound) {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const round = generateRound();
    const question = round[0];
    const correctAnswer = round[1];
    result.push(question);
    result.push(correctAnswer);
  }

  return result;
}

const gameEngine = (gameDescription, allRound) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = getAnswer('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameDescription);

  for (let i = 0; i < 5; i += 2) {
    console.log(`Question: ${allRound[i]}`);
    const answerUser = getAnswer('Your answer: ');
    const result = answerUser === allRound[i + 1];

    if (result) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${allRound[i + 1]}'.`);
      console.log(`Let's try again, ${nameUser}!`);
    }
    if (!result) break;
    if (i === 4) console.log(`Congratulations, ${nameUser}!`);
  }
};

export {
  gameEngine, getRandom, generateAllRound,
};
