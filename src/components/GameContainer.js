
import React from 'react';
import Footer from "./Footer";
import Rules from "./Rules"
import {getCards} from "../api/Cards";
import GameArea from "./GameArea";
import {updateHighScore, updateNumGames } from "../api/Score";



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
        const apiCards = getCards(this.state.source);

        apiCards.then((possibleCards) =>{
            shuffle(possibleCards);
            console.log(possibleCards.length);
            this.setState({
                cards: possibleCards,
                activeCard:possibleCards[0],
                activeCards:possibleCards.slice(0, 4)
            });
        });

    }

    startNewGame() {
        let state = {
            endGame: false,
            currentRule:Rules[0],
            isNot:false,
            score:0,
        };

        let possibleCards = this.state.cards;
        shuffle(possibleCards);
        state.card = possibleCards;
        state.activeCard = possibleCards[0];
        state.activeCards = possibleCards.slice(0, 4);
        this.setState(state)

    }

    componentDidMount() {
        this.setupGame();
    }

    clickHandler = (obj) =>{

        let isCorrect = this.state.currentRule.rule(
            obj,
            this.state.activeCard
        );

        if (this.state.isNot){
            isCorrect = !isCorrect
        }
        let score = 0;
        if (isCorrect){
            score = this.state.score + 1;
            this.changeRule(score)

        } else {
            const gradedCards = this.state.activeCards.slice().map((card) => {
                card.isCorrect = this.state.currentRule.rule(
                    card,
                    this.state.activeCard
                );
                console.log(card.isCorrect);
                if (this.state.isNot){
                    card.isCorrect = !card.isCorrect
                }
                console.log(card.isCorrect);
                return card
            });
            this.setState({activeCards: gradedCards});
            this.newGame();

        }


    };

    changeRule = (score) =>{

        const numRules = Math.min(Rules.length, Math.floor(score / 5));
        let currentRule = Rules[Math.floor(Math.random() * numRules)];
        //let currentRule = Rules[4];
        let possibleCards = this.state.cards;
        shuffle(possibleCards);
        let activeCard = possibleCards[0];
        let activeCards = possibleCards.slice(0, Math.floor(score / 4) + 4);
        shuffle(activeCards);
        let isNot = (Math.floor(Math.random() * 10) % 2 === 0);

        this.setState({ score, currentRule, possibleCards, activeCard, activeCards, isNot})
    };



    newGame = () =>{
        const prevScore = this.state.score;
        updateHighScore(prevScore);
        updateNumGames();
        this.setState({prevScore, endGame:true});
    };

    render() {

        return (
            this.state.cards ?
                <React.Fragment>
                    <div className={'header'}>Fear Not!</div>
                    {this.state.endGame &&

                    <div >
                        <div>Great Job.  You scored: {this.state.prevScore}</div>
                        <button onClick={()=>{this.startNewGame()}}>New Game?</button>
                    </div>

                    }
                    <div>
                        <div className={`rule ${this.state.isNot && 'not'}`}>
                            {this.state.currentRule.text(this.state.activeCard, this.state.isNot)}
                        </div>
                        < GameArea cards={this.state.activeCards} clickHandler={this.clickHandler} rule={this.state.currentRule}/>
                    </div>
                    <Footer
                        score={this.state.score}
                        prevScore={this.state.prevScore}
                    />

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
