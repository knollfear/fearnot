
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

            this.setState({
                cards: possibleCards,
                activeCard:possibleCards[0],
                activeCards:possibleCards.slice(0, 4)
            });
        });

    }
    componentDidMount() {
        this.setupGame();
    }

    clickHandler = (obj) =>{

        let isCorrect = this.state.currentRule.rule(
            obj,
            this.state.activeCard,
            this.state.activeCards
        );
        if (this.state.isNot){
            isCorrect = !isCorrect
        }
        let score = 0;
        if (isCorrect){
            score = this.state.score + 1

        }
        this.changeRule(score)
    };

    changeRule = (score) =>{

        if (score === 0){
            this.newGame();
        }
        const numRules = Math.min(Rules.length, Math.floor(score/5));
        let currentRule = Rules[Math.floor(Math.random() * numRules)];
        //let currentRule = Rules[4];
        let possibleCards = this.state.cards;
        shuffle(possibleCards);
        let activeCard = possibleCards[0];
        let activeCards = possibleCards.slice(0,Math.floor(score/4) + 4);
        shuffle(activeCards);
        let isNot = (Math.floor(Math.random() * 10) % 2 === 0);
        console.log(isNot);
        this.setState({score, currentRule, possibleCards, activeCard, activeCards, isNot})
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
                    {this.state.endGame ?

                        <div >
                            <div>Great Job.  You scored: {this.state.prevScore}</div>
                            <button onClick={()=>{this.setState({endGame:false})}}>New Game?</button>
                        </div>
                        :
                        <React.Fragment>
                            < GameArea cards={this.state.activeCards} clickHandler={this.clickHandler}/>
                            <Footer
                                rule={this.state.currentRule}
                                isNot={this.state.isNot}
                                activeCard={this.state.activeCard}
                                score={this.state.score}
                                prevScore={this.state.prevScore}
                            />
                        </React.Fragment>
                    }

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
