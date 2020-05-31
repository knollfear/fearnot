import React from 'react';

const GameArea = ({cards, clickHandler, rule}) =>{

    return cards.map((card, index)=>{
        return (
            <span onClick={() => clickHandler(card)} key={index}>
                {rule.cardRender(card)}
            </span>
    )
    })
};

export default GameArea
