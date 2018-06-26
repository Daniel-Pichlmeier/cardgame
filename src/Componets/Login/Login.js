import React from 'react'

export class Login extends React.Component {
    handleClick(e) {
        let loginResult = true;
        //eval fields etc
        this.props.onClick(loginResult)
    }

    render() {
        return (
            <form className="form_login" onClick={this.handleClick}>
                <div>Username:</div>
                <div><input type="text"/></div>
                <div>Password:</div>
                <div><input type="password"/></div>
                <div><button>Log in</button></div>
            </form>
        );
    }
}