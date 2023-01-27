import readlineSync from 'readline-sync';

export default () => {
  const nameUser = readlineSync.question('May I have your name? ');
  return nameUser;
};
