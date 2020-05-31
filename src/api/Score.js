const HIGHSCORE = 'FN_HIGHSCORE';

const getHighScore = () =>{
    return localStorage.getItem(HIGHSCORE) || 0
};

const setHighScore = score =>{

    localStorage.setItem(HIGHSCORE, score)
};

const updateHighScore = prevScore =>{
    setHighScore(
        Math.max(
            prevScore,
            getHighScore()
        )
    )
};

export {
    getHighScore,
    setHighScore,
    updateHighScore,

}
