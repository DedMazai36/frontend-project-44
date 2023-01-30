function getCorrectAnswer(question) {
  if (question > 1) {
    let result = 'yes';

    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        result = 'no';
        break;
      }
    }

    return result;
  } return 'no';
}

export default getCorrectAnswer;
