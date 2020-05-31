import React from 'react';

const GameArea = ({cards, clickHandler}) =>{

    return cards.map((card, index)=>{
    return (
        <span onClick={() => clickHandler(card)} key={index}>
            <img src={process.env.PUBLIC_URL + '/' + card.photoUrl } alt={card.displayName}/>
        </span>
)
    })
}

export default GameArea
