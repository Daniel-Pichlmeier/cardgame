import React, { Component } from 'react';
import './Game.css';
import {CardList} from "../CardList/CardList";

export class Game extends Component {
    render() {
        if (this.props.gameState < 0) {
            return (
                <div className="new_game">
                    <h1>Start new game</h1>
                    <img src="https://media2.giphy.com/media/sNWGEbc5Jzp4c/200_s.gif" alt="something_cool"/>
                    <button onClick={this.props.newGame}>Start</button>
                </div>
            );
        } else if (this.props.gameState > 9) {
            return (
                <div className="new_game">
                    <h1>{this.props.countAnsweredRight > 5 ? "Nice game!" : "Really? That's embarrassing"}</h1>
                    <div>
                        <img src={this.props.countAnsweredRight > 5 ? "https://i.pinimg.com/originals/21/5e/55/215e55badd4d749e3da6193a562c2f81.gif" : "https://thetyee.ca/Opinion/2016/03/30/Idiot-610px.jpg"} alt="something_cool"/>
                        <span>You got {this.props.countAnsweredRight > 5 ? "and incredible number of" : "only"} <span style={{color: "red"}}>{this.props.countAnsweredRight}</span> people right!</span>
                    </div>
                    <button onClick={this.props.newGame}>Start again</button>
                </div>
            );
        } else {
            return (
                <CardList
                    className="card_list"
                    countAnswered={this.props.countAnswered}
                    countFailed={this.props.countFailed}
                />
            );
        }


    }
}
