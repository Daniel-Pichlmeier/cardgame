import React from 'react';

export class Menu extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div>
                    <div>Username</div>
                    <button>Login</button>
                </div>
            </div>
        )
    }
}