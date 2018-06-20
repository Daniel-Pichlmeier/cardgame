import React from 'react';
import {CardDefault} from "../CardDefault/CardDefault";
import {CardShown} from "../CardShown/CardShown";

const style = {
    fontWeight: "normal"
};

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true, //card: default or show
        };
        this.toggleCard = this.toggleCard.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }

    toggleCard() {
        let newState = !this.state.isActive;
        this.setState({
            isActive: newState,
            answered: false,
            failed: false
        });
    }

    getPath() {
        return (`http://localhost/media/${this.props.image}`).toString();
    }

    checkResult(guessed) {
        if (guessed) {
            console.log("getting here!");
            this.setState({
                answered: true,
            });
        }
    }

    render() {
        return (
            <div style={style}>
                <CardDefault
                    classToggle={this.state.answered ? "card card_hidden" : "card card_shown"}
                    submitResult={this.checkResult}
                    name={this.props.name}
                    src={this.getPath()}
                    state={this.state.isActive}
                />
                <CardShown
                    answered={this.state.answered}
                    classToggle={this.state.answered ? "card card_shown" : "card card_hidden"}
                    src={this.getPath()}
                    state={this.state.isActive}
                    name={this.props.name}
                    likes={this.props.likes}
                    worksIn={this.props.worksIn}
                />
            </div>
        );
    }
}