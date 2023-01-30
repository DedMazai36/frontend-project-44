import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  const answerUser = readlineSync.question(question);
  return answerUser;
};

export default getAnswer;
