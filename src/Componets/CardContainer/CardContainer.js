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
            solved: false
        }
    }

    toggleCard = () => {
        let newState = !this.state.isActive;
        this.setState({
            isActive: newState,
        })
    }

    /*happens on card default*/
    submitAResult = (playerResult) => {
        const solution = this.props.solution
        let solved = null;
        console.log(solution, typeof solution, playerResult, typeof playerResult)
        playerResult === solution ? solved = false : solved = true
        this.setState({
            answered: true,
            solved: solved
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
                    onClick = {this.submitAResult}
                />
                <CardShown
                    solved={this.state.solved}
                    classToggle={this.state.answered ? "card card_shown" : "card card_hidden"}
                    answer={this.props.solution}
                    data = {this.props.data}
                />
            </div>
        )
    }
}