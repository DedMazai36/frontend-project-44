function getCorrectAnswer(question) {
  const collNumbers = question.split(' ');
  let firstNumber = parseInt(collNumbers[0], 10);
  let secondNumber = parseInt(collNumbers[1], 10);

  while (secondNumber) {
    const auxNumber = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = auxNumber;
  }

  return `${firstNumber}`;
}

export default getCorrectAnswer;
