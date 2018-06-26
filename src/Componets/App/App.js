import React, { Component } from 'react'; //unclear as of now
// import logo from './logo.svg'; //keeping it for testing purposes
import './App.css';
import {Menu} from "../Menu/Menu";
import {StatusBar} from "../StatusBar/StatusBar";
import {Login} from "../Login/Login";
import {Game} from "../Game/Game";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            countAnsweredRight: 0,
            countAnsweredWrong: -1,
            biggestStreak : -1,
        }
    }

    logIn = (correctLogIn) => {
        if (correctLogIn) {
            this.setState({
                loggedIn: true,
            });
        }
    };

    // info coming from CardShown
    setCountAnswered = () => {
            this.setState({
                countAnsweredRight: this.state.countAnsweredRight + 1,
            });
        this.generateCardKey();
    };

    setCountFailed = () => {
        this.setState({
                countAnsweredWrong: this.state.countAnsweredWrong + 1,
            });
        this.generateCardKey();
    };

    // manage game and content
    startNewGame = () => {
        this.setState({
            countAnsweredRight: 0,
            countAnsweredWrong: 0,
            biggestStreak : 0,
        });
        this.generateCardKey();
    };

    generateCardKey = () => {
        return this.state.countAnsweredRight + this.state.countAnsweredWrong;
    };

    // evaluate when a card is answered
    setBiggestStreak = () => {

        // ... do some evaluating

        this.setState({
            biggestStreak: this.state.biggestStreak + 1,
        })
    };

    render() {
        if (!this.state.loggedIn) {
        return (
            <div className="AppContainer">
                <Login
                    onClick={this.logIn}
                />
            </div>
            );
        }
        else if (this.state.loggedIn) {
        return (
          <div className="AppContainer">
              <Menu
                  className="main_menu"
              />
              <Game
                  key={this.generateCardKey()}
                  gameState={this.state.countAnsweredWrong + this.state.countAnsweredRight}
                  countAnsweredRight={this.state.countAnsweredRight}
                  countAnsweredWrong={this.state.countAnsweredWrong}
                  biggestStreak={this.state.biggestStreak}
                  newGame={this.startNewGame}
                  countAnswered={this.setCountAnswered}
                  countFailed={this.setCountFailed}
                  className="game_container"
              />
              <StatusBar
                  countAnsweredRight={this.state.countAnsweredRight}
                  countAnsweredWrong={this.state.countAnsweredWrong}
                  biggestStreak={this.state.biggestStreak}
                  className="status_bar"
              />
          </div>
        );
      }
    }
}

export default App;
