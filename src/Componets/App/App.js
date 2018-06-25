import React, { Component } from 'react'; //unclear as of now
// import logo from './logo.svg'; //keeping it for testing purposes
import './App.css';
import {Menu} from "../Menu/Menu";
import {CardList} from "../CardList/CardList";
import {StatusBar} from "../StatusBar/StatusBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countAnsweredRight: 0,
            countAnsweredWrong: 0,
            biggestStreak : 0,
        }
    }

    // info coming from CardShown
    setCountAnswered = (answeredCorrectly) => {
        if (answeredCorrectly) {
            this.setState({
                countAnsweredWrong: this.state.countAnsweredWrong + 1,
            });
        } else {
            this.setState({
                countAnsweredRight: this.state.countAnsweredRight + 1,
            })
        }
    };

    // evaluate when a card is answered
    setBiggestStreak = () => {

        // ... do some evaluating

        this.setState({
            biggestStreak: this.state.biggestStreak + 1,
        })
    };

    render() {
        return (
          <div className="AppContainer">
              <Menu className="main_menu"/>
              <CardList
                  className="card_list"
                  countAnswered={this.setCountAnswered}
              />
              <StatusBar
                  countAnsweredRight={this.state.countAnsweredRight}
                  constAnsweredWrong={this.state.countAnsweredWrong}
                  biggestStreak={this.state.biggestStreak}
                  className="status_bar"
              />
          </div>
        );
      }
}

export default App;
