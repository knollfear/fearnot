
import React from 'react';
import Footer from "./Footer";
import Rules from "./Rules"
import GameArea from "./GameArea";



class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state  = {
            selectedSource:'fearless',
            currentRule:Rules[0],
            isNot:false,
            score:0,

        }
    }

    setupGame() {
        fetch(process.env.PUBLIC_URL + `/${this.state.selectedSource}.json`)
            .then(response => {
                return response.json();
            })
            .then(entity => {
                let possibleCards = entity.cards;

                shuffle(possibleCards);

                this.setState({
                    cards: possibleCards,
                    activeCard:possibleCards[0]
                });
            });
    }
    componentDidMount() {
        this.setupGame();
    }

    clickHandler = (obj) =>{
        console.log(obj.preferredName || obj.firstName);
        const isCorrect = this.state.currentRule.rule(obj, this.state.activeCard, this.state.isNot);
        let score = 0
        if (isCorrect){
            score = this.state.score + 1
        }
        this.changeRule(score)
    };

    changeRule = (score) =>{
        let currentRule = Rules[Math.floor(Math.random() * Rules.length)];
        let possibleCards = this.state.cards;
        shuffle(possibleCards);
        let activeCard = possibleCards[0];
        let isNot = (Math.floor(Math.random() * 10) % 2 === 0);
        console.log(isNot);
        this.setState({score, currentRule, possibleCards, activeCard, isNot})
    };

    render() {
        let cards;
        if(this.state.cards){
            cards = this.state.cards.slice(0,Math.floor(this.state.score/4) + 4);
            shuffle(cards);
        }

        return (
            this.state.cards ?
                <React.Fragment>
                    <div className={'header'}>Fear Not!</div>
                    <GameArea cards={cards} clickHandler={this.clickHandler}/>
                    <Footer
                        rule={this.state.currentRule}
                        isNot={this.state.isNot}
                        activeCard={this.state.activeCard}
                        score={this.state.score}/>
                </React.Fragment>
                :
                <div>Loading</div>

        )
    }
}

function shuffle(array) {
    let m = array.length,
        t,
        i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}

export default GameContainer
