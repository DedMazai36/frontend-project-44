function getQuestion(max = 25) {
    const getRandomOperator = Math.floor(Math.random() * 3);
    let result = '0 \u002B 0';
    switch (getRandomOperator) {
        case 0:
            result = `${Math.floor(Math.random() * max)} \u002B ${Math.floor(Math.random() * max)}`;
            break;
        case 1:
            result = `${Math.floor(Math.random() * max)} \u002D ${Math.floor(Math.random() * max)}`;
            break;
        case 2:
            result = `${Math.floor(Math.random() * max)} \u002A ${Math.floor(Math.random() * max)}`;
            break;
    };

    return result;
};

export {getQuestion};
