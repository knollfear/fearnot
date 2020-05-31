const getCards = async source =>{

    const response = await fetch(process.env.PUBLIC_URL + `/fearless.json`);
    const json = await response.json();
    return json.cards;

};

export {
    getCards,
}
