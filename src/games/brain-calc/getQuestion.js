function getQuestion(max = 25) {
    const getRandomOperator = Math.floor(Math.random() * 3);
    const firstNumber = Math.floor(Math.random() * max);
    const secondNumber = Math.floor(Math.random() * max);
    let result;
    
    switch (getRandomOperator) {
        case 0:
            result = `${firstNumber} \u002B ${secondNumber}`;
            break;
        case 1:
            result = `${firstNumber} \u002D ${secondNumber}`;
            break;
        case 2:
            result = `${firstNumber} \u002A ${secondNumber}`;
            break;
    };

    return result;
};

export {getQuestion};
