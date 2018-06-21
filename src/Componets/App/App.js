import React, { Component } from 'react'; //unclear as of now
// import logo from './logo.svg'; //keeping it for testing purposes
import './App.css';
import {Menu} from "../Menu/Menu";
import {CardList} from "../CardList/CardList";
import {StatusBar} from "../StatusBar/StatusBar";

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
          <Menu className="main_menu"/>
          <CardList className="card_list"/>
          <StatusBar className="status_bar"/>
      </div>
    );
  }
}

export default App;
