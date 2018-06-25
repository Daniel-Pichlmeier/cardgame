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
            isActive: true,
            answered: null,
            failed: false
        };
        this.toggleCard = this.toggleCard.bind(this);
        this.checkResult = this.checkResult.bind(this);
    }

    toggleCard() {
        let newState = !this.state.isActive;
        this.setState({
            isActive: newState,
        });
    }


    checkResult(guessed) {
        this.setState({
            answered: true,
            failed: !guessed
        })
    }

    render() {
        return (
            <div style={style}>
                <CardDefault
                    classToggle={this.state.answered ? "card card_hidden" : "card card_shown"}
                    answer={this.props.solution}
                    data = {this.props.data}
                    toggleThis = {this.toggleCard}
                />
                <CardShown
                    failed={this.state.failed}
                    classToggle={this.state.answered ? "card card_shown" : "card card_hidden"}
                    answer={this.props.solution}
                    data = {this.props.data}
                    solve = {this.checkResult}
                />
            </div>
        )
    }
}