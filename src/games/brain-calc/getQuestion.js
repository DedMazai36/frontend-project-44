function getQuestion(max = 10) {
    const getRandomOperator = Math.floor(Math.random() * 3);
    let result = '0 + 0';
    switch (getRandomOperator) {
        case 0:
            result = `${Math.floor(Math.random() * max)} + ${Math.floor(Math.random() * max)}`;
            break;
        case 1:
            result = `${Math.floor(Math.random() * max)} - ${Math.floor(Math.random() * max)}`;
            break;
        case 2:
            result = `${Math.floor(Math.random() * max)} * ${Math.floor(Math.random() * max)}`;
            break;
    };

    return result;
};

export {getQuestion};
