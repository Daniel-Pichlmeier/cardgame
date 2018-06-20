import React from 'react';

export class CardDefault extends React.Component {
    render() {
        return (
            <div className={this.props.classToggle}>
                <div>Who could it be?</div>
                <img src={this.props.src} alt="image"/>
            </div>);
    }
}