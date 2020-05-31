import React from 'react';
import {HIGHSCORE} from './Rules'

const Footer = ({rule, activeCard, isNot, score, prevScore}) =>{

    const highScore = localStorage.getItem(HIGHSCORE) || false;
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
            {highScore &&
                <div>
                    High Score: {highScore}
                </div>
            }


        </div>
    )
}

export default Footer
