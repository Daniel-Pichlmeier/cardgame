import React from 'react';
import {CardContainer} from "../CardContainer/CardContainer";
import {CardShown} from "../CardShown/CardShown";
import {CardDefault} from "../CardDefault/CardDefault";

class Fetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost/data/data.json')
            .then(results => {
                return results.json();
            }).then(data => {
            let thisData = data.results.map((thatData) => {
                return (<CardContainer name={thatData.persons.name} worksIn={thatData.persons.worksIn} likes={thatData.persons.likes} image={thatData.persons.image} />);
            });
        this.setState({data: thisData});
        console.log("state", this.state.data);
        });
    }
    render() {
        return (
            <div>
                <CardShown/>
                <CardDefault/>
            </div>
        )
    }

}