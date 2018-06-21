import React, { Component } from 'react'; //unclear as of now
// import logo from './logo.svg'; //keeping it for testing purposes
import './App.css';
import {Menu} from "../Menu/Menu";
import {CardsContainer} from "../CardsContainer/CardsContainer";

class App extends Component {
    constructor(props) {
        super(props);
        /*fetch("http://localhost/data/data.json")
            .then(response => response.json())
            .then(result => {
            })
            */
    }



  render() {
    return (
      <div className="AppContainer">
          <Menu />
          <CardsContainer className="cards_container"/>
      </div>
    );
  }
}

export default App;
