function getQuestion(max = 50) {
    const result = `${Math.floor(Math.random() * max)} ${Math.floor(Math.random() * max)}`;
    return result;
};

export {getQuestion};
