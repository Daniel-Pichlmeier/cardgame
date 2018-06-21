import React from 'react';
import {CardContainer} from "../CardContainer/CardContainer";

export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            data: null
        }
    }

    getDataFromApi() {
        this.setState({data: null}, () => {
            fetch("https://randomuser.me/api/?results=50")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            data: result.results
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
        this.getDataFromApi();
    }

    render(){
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div className="error_api">Fehler: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="api_loader">Lade Daten...</div>;
        } else {
            return (
                <ul>
                    {data.map(data => (
                        <li key={data.login.uuid}>
                            <CardContainer
                            name={data.name.last}
                            image={data.picture.large}
                            worksIn={data.login.password}
                            likes={data.login.username}
                            />
                        </li>

                    ))}
                </ul>
            );
        }
    }
}