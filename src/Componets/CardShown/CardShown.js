import React from 'react';

const win = {
  background: "#2f6f23"
};

const lose = {
  background: "#6f2323"
};

export class CardShown extends React.Component {

    evalResult() {
        if (this.props.failed) {
            return lose;
        } else {
            return win;
        }
    }

    render() {
        return (
            <div className={this.props.classToggle} style={this.evalResult()}>
                <img alt={this.props.name} src={this.props.src} />
                <div className="info_panel">
                    <span>Name: {this.props.name}</span>
                    <span>Likes most: {this.props.likes}</span>
                    <span>Works in: {this.props.worksIn}</span>
                </div>
            </div>
        );
    }
}