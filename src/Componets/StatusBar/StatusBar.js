import React from 'react';

export class StatusBar extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div>
                    <span>You got: </span>{this.props.countAnsweredRight}<span>right answers</span>
                </div>
                <div>
                    <span>and</span>{this.props.countAnsweredWrong}<span>wrong ones!</span>
                </div>
                <div>
                    <span>Your current streak is</span>{this.props.biggestStreak}<span>right answers in a row</span>
                </div>
            </div>

        )
    }
}