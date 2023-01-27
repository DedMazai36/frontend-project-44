function getQuestionAndAnswer(max = 100) {
    const collNumbers = [];
    const step = Math.floor(Math.random() * 10);

    collNumbers.push(Math.floor(Math.random() * max));

    let iMax = Math.floor(Math.random() * 5) + 5;

    for (let i = 1; i <= iMax; i += 1) {
        collNumbers.push(collNumbers[i - 1] + step);
    };

    const randomIndex = Math.floor(Math.random() * (iMax + 1));
    const randomNumber = `${collNumbers[randomIndex]}`;

    collNumbers[randomIndex] = '..';

    const result = [collNumbers, randomNumber];

    return result;
};

export {getQuestionAndAnswer};
