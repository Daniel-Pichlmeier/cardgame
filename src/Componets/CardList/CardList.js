import React from 'react';
import {CardContainer} from "../CardContainer/CardContainer";

export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: null,
            target: null
        }
    }

    getDataFromApi() {
        this.setState({data: null}, () => {
            fetch("https://randomuser.me/api/?results=3")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            data: result.results,
                            target: Math.floor(Math.random() * 3)
                        });
                    },
                    // handle errors
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        });
    }

    componentDidMount() {
        this.getDataFromApi()
    }

    render(){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div className="error_api">Fehler: {error.message}</div>
        } else if (!isLoaded) {
            return <div className="api_loader">Lade Daten...</div>
        } else {
            return (
                <CardContainer
                    data={this.state.data}
                    solution={this.state.target}
                />
            )
        }
    }
}