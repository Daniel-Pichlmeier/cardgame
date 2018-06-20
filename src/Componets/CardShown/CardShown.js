import React from 'react';

export class CardShown extends React.Component {
    render() {
        return (
            <div className={this.props.classToggle}>
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