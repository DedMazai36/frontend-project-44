function getQuestion(collNumbers) {
    let resultString = '';
    for (let number of collNumbers) {
        resultString += number + ' ';
    };

    return resultString.slice(0, -1);
};

export {getQuestion};
