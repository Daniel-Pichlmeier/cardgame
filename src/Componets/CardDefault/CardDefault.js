import React from 'react';

const textStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold"
};

const inputStyle = {
    border: "1px solid #c1c1c1",
    boxShadow: "inset 0 0 1px 1px #f9f9f9",
    padding: 2,
    color: "#464646"
};

const button = {
    background: "#236f37",
    height: 21,
    width: 21,
    border: "none",
    margin: 8,
    borderRadius: 2
};

const danger = {
    background: "#6f5f23"
};

export class CardDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tries: 0,
            inputValue: "",
            danger: false
        };
    }

    handleChange = (e) => {
        const result = e.target.value;
        this.setState({
            inputValue: result,
        });
    };

    submitAResult = () => {
        const currentInput = this.state.inputValue;
        const solution = this.props.name;
        // catch and abort on empty clicks
        if (currentInput === "") {
            return false;
        }
        //it is solved
        if (currentInput.toLowerCase() === solution.toLowerCase() && this.state.tries < 3) {
            this.props.submitResult(true);
        //count tries
        } else if (currentInput.toLowerCase() !== solution.toLowerCase() && this.state.tries < 3) {
            if (this.state.tries === 1) {
                this.setState({
                    danger: true,
                });
            }
            let currentTries = this.state.tries;
            currentTries++;
            this.setState({
                tries: currentTries,
                inputValue: ""
            });
            if (currentTries >= 3) {
                this.props.submitResult(false);
            }
        //failed
        }
    };

    triesLeft = () => {
        return 3 - this.state.tries;
    };

    showStatus = () => {
        if (this.state.danger === false) {
            return {};
        } else {
            return danger;
        }
    };

    render() {
        return (
            <div className={this.props.classToggle} style={this.showStatus()}>
                <div style={textStyle}>
                    <span>{this.props.name}</span>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} style={inputStyle}/>
                    <button style={button} onClick={this.submitAResult}/>
                    <div>{this.triesLeft()}</div>
                </div>
                <img src={this.props.src} alt="image"/>
            </div>);
    }
}