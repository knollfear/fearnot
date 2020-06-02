import React, { useState } from 'react';

const GameArea = ({cards, clickHandler, rule}) =>{
    const displayStats = {
        Name: 'txt',
        Herd: 'division',
        Title: 'jobTitle'

    };
    const [clicked, setClicked] = useState(null);
    let hasCorrect = cards.some((card)=>{ return card.isCorrect});
    const nextTurn = (card) =>{
        if (clicked || hasCorrect){
            return;
        }
        setClicked(card);
        if (cards.length <= 6) {
            setTimeout(() =>{
                clickHandler(card);
                setClicked(null);
            }, 1000);
        } else{
            setClicked(null);
            clickHandler(card);
        }

    };
    return cards.map((card, index)=>{
        let classes = 'card';
        if (card.isCorrect){
            classes += ' correct'

        } else if (clicked && card.txt === clicked.txt){
            classes += ' active'
        }

        return (
            <div className={ classes } onClick={(e) => {nextTurn(card)
            }} key={`AC-${index}`}>

                {rule.cardRender(card)}

                { (clicked || hasCorrect) &&
                <ul>
                    {Object.entries(displayStats).map( ([key, value]) => <li>{card[value]}</li>)}
                </ul>}

            </div>
    )
    })
};

export default GameArea
