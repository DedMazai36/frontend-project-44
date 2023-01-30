function getCorrectAnswer(question) {
    const numbersAndOperator = question.split(' ');
    let result;

    switch (numbersAndOperator[1]) {
        case '+':
            result = Number(numbersAndOperator[0]) + Number(numbersAndOperator[2]);
            break;
        case '-':
            result = Number(numbersAndOperator[0]) - Number(numbersAndOperator[2]);
            break;
        case '*':
            result = Number(numbersAndOperator[0]) * Number(numbersAndOperator[2]);
            break;
    };

    return `${result}`;
};

export {getCorrectAnswer};
