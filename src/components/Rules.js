import React from "react";

const Rules =[
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} ${obj.txt}`},
        rule: (obj, activeCard)=>{
            return obj.txt === activeCard.txt
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} ${obj.preferredName || obj.firstName}`},
        rule: (obj, activeCard)=>{
            return (obj.preferredName || obj.firstName) === (activeCard.preferredName || activeCard.firstName)
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },
    {
        text:(obj, isNot) =>{return imgPrompt(obj, isNot)},
        rule: (obj, activeCard)=>{
            return (obj.preferredName || obj.firstName) === (activeCard.preferredName || activeCard.firstName)
        },
        cardRender: (obj) =>{return txtCard(obj)},
    },
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} last name of ${obj.lastName}`},
        rule: (obj, activeCard)=>{
            return obj.lastName === activeCard.lastName
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} ${obj.division}`},
        rule: (obj, activeCard)=>{
            return obj.division === activeCard.division
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} ${obj.jobTitle}`},
        rule: (obj, activeCard)=>{
            return obj.jobTitle === activeCard.jobTitle
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },

    {
        text:(obj, isNot) =>{return `${isNot ? 'Not first' : 'First'} alphabetically by last name`},
        rule: (obj, activeCard, activeCards)=>{
            let lastNames = activeCards.map((card)=>{return card.lastName });
            lastNames.sort();
            return obj.lastName === lastNames[0];

        },
        cardRender: (obj) =>{return imgCard(obj)},
    },

];

const imgPrompt = (obj, isNot) =>{
    return (
        <div>
            {isNot ? 'not' : ''}
            <img src={process.env.PUBLIC_URL + '/' + obj.photoUrl } alt={obj.displayName}/>
        </div>
    )
};

const imgCard = (card) =>{
    return (
        <img src={process.env.PUBLIC_URL + '/' + card.photoUrl } alt={card.displayName}/>
    )
};

const txtCard = (card) =>{
    return <button>{card.txt}</button>
};

export default  Rules;
