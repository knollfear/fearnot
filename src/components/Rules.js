const Rules =[
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.preferredName || obj.firstName}`},
        rule: (obj, activeCard)=>{
            return (obj.preferredName || obj.firstName) === (activeCard.preferredName || activeCard.firstName)
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} last name of ${obj.lastName}`},
        rule: (obj, activeCard)=>{
            return obj.lastName === activeCard.lastName
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.division}`},
        rule: (obj, activeCard)=>{
            return obj.division === activeCard.division
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.jobTitle}`},
        rule: (obj, activeCard)=>{
            return obj.jobTitle === activeCard.jobTitle
        }
    },

    {
        text:(obj, isNot) =>{return `${isNot ? 'Not first' : 'First'} alphabetically by last name`},
        rule: (obj, activeCard, activeCards)=>{
            let lastNames = activeCards.map((card)=>{return card.lastName });
            lastNames.sort();
            return obj.lastName === lastNames[0];

        }
    },




];


export default  Rules;
