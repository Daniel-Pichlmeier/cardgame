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

export class CardDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tries: 0,
            inputValue: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const result = e.target.value;
        if (result.toLowerCase() === this.props.name.toLowerCase()) {
            this.props.submitResult(true);
        }
    }

    render() {
        return (
            <div className={this.props.classToggle}>
                <h2>Who could it be?</h2>
                <div style={textStyle}>
                    <span>Make a guess:</span>
                    <input onChange={this.handleChange} style={inputStyle}/>
                    <button style={button}/>
                </div>
                <img src={this.props.src} alt="image"/>
            </div>);
    }
}