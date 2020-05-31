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
    let numGames = localStorage.getItem('FN_NUM_GAMES') || '0';
    numGames = isNaN(numGames) ? 1 : parseInt(numGames, 10) + 1;

    localStorage.setItem('FN_NUM_GAMES', numGames)
};

export {
    getHighScore,
    setHighScore,
    updateHighScore,
    updateNumGames,

}
