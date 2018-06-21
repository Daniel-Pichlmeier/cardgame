import React from 'react';

export class StatusBar extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                I am a very cool status bar and i do nothing!
            </div>
        )
    }
}