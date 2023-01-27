import { evaluate } from 'mathjs';

function getCorrectAnswer(question) {
    return `${evaluate(question)}`;
};

export {getCorrectAnswer};
