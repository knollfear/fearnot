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

const updateNumGames = () =>{
    localStorage.setItem('FN_NUM_GAMES', (localStorage.getItem('FN_NUM_GAMES') || 0) + 1)
}

export {
    getHighScore,
    setHighScore,
    updateHighScore,
    updateNumGames,

}
