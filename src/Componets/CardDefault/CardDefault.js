import React from 'react'

export class CardDefault extends React.Component {
    constructor(props) {
        super(props)
    }
    getPicture() {
        return "url(" + this.props.data[this.props.answer].picture.large + ")"
    }

    handleClick = (e) => {
        let result = e.target.dataset.number;
        let resultText = e.target.innerText;
        if (result !== undefined) {
            result = parseInt(result)
        } else {
            return false
        }
        console.log("Result @ handleclick: ", result);
        this.props.onClick(result, resultText)
    };

    render() {
        return (
            <div className={this.props.classToggle} style={{backgroundImage: this.getPicture()}}>
                <ul onClick={this.handleClick}>
                    <li> {this.props.data[this.props.answer].name.first} </li>
                    <li data-number="0">{this.props.data[0].name.title} {this.props.data[0].name.first} {this.props.data[0].name.last}</li>
                    <li data-number="1">{this.props.data[1].name.title} {this.props.data[1].name.first} {this.props.data[1].name.last}</li>
                    <li data-number="2">{this.props.data[2].name.title} {this.props.data[2].name.first} {this.props.data[2].name.last}</li>
                </ul>
            </div>);
    }
}