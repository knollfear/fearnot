import React from 'react';
import {getHighScore} from "../api/Score";

const Footer = ({rule, activeCard, isNot, score, prevScore}) =>{

    const highScore = getHighScore();
    return(
        <div className={'footer'}>
            <div>
                {rule.text(activeCard, isNot)}
            </div>
            <div>
                Current Score: {score}
            </div>
            {prevScore &&
                <div>
                    Previous Score: {prevScore}
                </div>
            }
            {highScore > 0 &&
                <div>
                    High Score: {highScore}
                </div>
            }


        </div>
    )
}

export default Footer
