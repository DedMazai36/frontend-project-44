/* eslint-disable no-restricted-syntax */
function getQuestion(collNumbers) {
  let resultString = '';
  for (const number of collNumbers) {
    resultString += `${number} `;
  }

  return resultString.slice(0, -1);
}

export default getQuestion;
