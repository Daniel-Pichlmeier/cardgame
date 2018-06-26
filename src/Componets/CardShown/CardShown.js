import React from 'react';

const win = {
  background: "#2f6f23"
};

const lose = {
  background: "#6f2323"
};

export class CardShown extends React.Component {
    constructor(props) {
        super(props);
    }

    //helpers
    evalResult() {
        if (this.props.solved) {
            return win;
        } else {
            return lose;
        }
    }

    getPicture() {
        return "url(" + this.props.data[this.props.answer].picture.large + ")";
    }

    render() {
        return (
            <div className={this.props.classToggle} style={{backgroundImage: this.getPicture()}}>
                <div className="info_panel" style={this.evalResult()}>
                    <span>Name: {this.props.data[this.props.answer].name.title} {this.props.data[this.props.answer].name.first} {this.props.data[this.props.answer].name.last}</span>
                    <span>Your answer: {this.props.userAnswer}</span>
                </div>
                <button onClick={this.props.solved ? this.props.countAnswered : this.props.countFailed}>{this.props.solved ? "WOHOO!" : "ALMOST"}</button>
            </div>
        );
    }
}