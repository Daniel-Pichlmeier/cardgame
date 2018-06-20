import React from 'react';
import {CardDefault} from "../CardDefault/CardDefault";
import {CardShown} from "../CardShown/CardShown";

export class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true, //card: default or show
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        let newState = !this.state.isActive;
        this.setState({
            isActive: newState
        });
    }

    getPath() {
        return (`http://localhost/media/${this.props.image}`).toString();
    }

    toggleVisibilityCardDefault() {
        let className;
        this.state.isActive ?  className = "card card_shown" : className = "card card_hidden";
        return className;
    }

    toggleVisibilityCardShown() {
        let className;
        this.state.isActive ? className = "card card_hidden" : className = "card card_shown";
        return className;
    }

    render() {
        return (
            <div onClick={this.toggleCard}>
                <CardDefault classToggle={this.toggleVisibilityCardDefault()} src={this.getPath()} state={this.state.isActive}/>
                <CardShown
                    classToggle={this.toggleVisibilityCardShown()}
                    src={this.getPath()}
                    state={this.state.isActive}
                    name={this.props.name}
                    likes={this.props.likes}
                    worksIn={this.props.worksIn}
                />
            </div>
        );
    }
}