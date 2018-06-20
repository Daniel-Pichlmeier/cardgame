import React from 'react';
import {CardContainer} from "../CardContainer/CardContainer";

export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    fetchData() {
        this.setState({data: null}, () => {
            fetch('http://localhost/data/data.json')
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        data: data,
                    });
                });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.state.data) {
            return (
                <div className="card_list">
                    {this.state.data.persons.map((person, index) => {
                            return (<CardContainer key={index} name={person.name} worksIn={person.worksIn}
                                                   likes={person.likes} image={person.image}/>);
                        }
                    )}
                </div>
            );
        }
        return <h1>Assembling avengers...</h1>
    }
}