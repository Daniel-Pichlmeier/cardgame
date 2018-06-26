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
            answered: false,
            userAnswer: null,
            solved: false
        }
    }

    toggleCard = () => {
        let newState = !this.state.isActive;
        this.setState({
            isActive: newState,
        })
    };

    /*happens on card default*/
    submitAResult = (playerResult, resultText) => {
        const solution = this.props.solution;
        let solved;
        console.log(solution, typeof solution, playerResult, typeof playerResult);
        playerResult === solution ? solved = true : solved = false;
        console.log("solved: ", solved);
        this.setState({
            answered: true,
            userAnswer: resultText,
            solved: solved
        })
    };

    render() {
        return (
            <div style={style}>
                <CardDefault
                    classToggle={this.state.answered ? "card card_hidden" : "card card_shown"}
                    answer={this.props.solution}
                    data = {this.props.data}
                    toggleThis = {this.toggleCard}
                    onClick = {this.submitAResult}
                />
                <CardShown
                    solved={this.state.solved}
                    userAnswer={this.state.userAnswer}
                    classToggle={this.state.answered ? "card card_shown" : "card card_hidden"}
                    answer={this.props.solution}
                    data = {this.props.data}
                    countAnswered={this.props.countAnswered}
                    countFailed={this.props.countFailed}
                />
            </div>
        )
    }
}