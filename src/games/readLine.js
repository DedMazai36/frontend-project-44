import readlineSync from 'readline-sync';

export const getAnswer = (question) => {
  const answerUser = readlineSync.question(question);
  return answerUser;
};
