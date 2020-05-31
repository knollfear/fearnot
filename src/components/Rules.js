const Rules =[
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.preferredName || obj.firstName}`},
        rule: (obj, activeCard, isNot)=>{
            return isNot ?
                (obj.preferredName || obj.firstName) !== (activeCard.preferredName || activeCard.firstName)
                :
                (obj.preferredName || obj.firstName) === (activeCard.preferredName || activeCard.firstName)
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} last name of ${obj.lastName}`},
        rule: (obj, activeCard, isNot)=>{
            return isNot ?
                 obj.lastName !== activeCard.lastName
                :
                 obj.lastName === activeCard.lastName
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.division}`},
        rule: (obj, activeCard, isNot)=>{
            return isNot ?
                obj.division !== activeCard.division
                :
                obj.division === activeCard.division
        }
    },
    {
        text:(obj, isNot) =>{return `Click on ${isNot ? 'not' : ''} ${obj.jobTitle}`},
        rule: (obj, activeCard, isNot)=>{
            return isNot ?
                obj.jobTitle !== activeCard.jobTitle
                :
                obj.jobTitle === activeCard.jobTitle
        }
    },



];

export default  Rules;
