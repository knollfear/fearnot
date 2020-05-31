import React from 'react';

const Footer = ({rule, activeCard, isNot, score}) =>{
    return(
        <div className={'footer'}>
            <div>
                {rule.text(activeCard, isNot)}
            </div>
            <div>
                SCORE: {score}
            </div>
        </div>
    )
}

export default Footer
