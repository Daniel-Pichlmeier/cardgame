import React from 'react'

const textStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold"
}

const inputStyle = {
    border: "1px solid #c1c1c1",
    boxShadow: "inset 0 0 1px 1px #f9f9f9",
    padding: 2,
    color: "#464646"
}

const button = {
    background: "#236f37",
    height: 21,
    width: 21,
    border: "none",
    margin: 8,
    borderRadius: 2
}

const danger = {
    background: "#6f5f23"
}

export class CardDefault extends React.Component {
    constructor(props) {
        super(props)
    }
    getPicture() {
        return "url(" + this.props.data[this.props.answer].picture.large + ")"
    }

    handleClick = (e) => {
        let result = e.target.dataset.number
        if (result !== undefined) {
            result = parseInt(result)
        } else {
            return false
        }
        console.log("Result @ handleclick: ", result)
        this.props.onClick(result)
    }

    render() {
        return (
            <div className={this.props.classToggle} style={{backgroundImage: this.getPicture()}}>
                <ul onClick={this.handleClick}>
                    <li> {this.props.data[this.props.answer].name.first} </li>
                    <li data-number="1">{this.props.data[0].name.title} {this.props.data[0].name.first} {this.props.data[0].name.last}</li>
                    <li data-number="2">{this.props.data[1].name.title} {this.props.data[1].name.first} {this.props.data[1].name.last}</li>
                    <li data-number="3">{this.props.data[2].name.title} {this.props.data[2].name.first} {this.props.data[2].name.last}</li>
                </ul>
            </div>);
    }
}