import React from 'react';
import ReactDOM from 'react-dom';

function fetchAllSpecies() {
    return fetch("/species/", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(data=>data.json());
}

class SpeciesSelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            species: []
        };
        if(this.props.species && this.props.species.length) {
            this.setState({species:this.props.species});
        }

    }
    componentDidMount() {
        if(!this.state.species.length) {
            fetchAllSpecies().then(
                (data) => this.loadedSpeciesList(data)
            );
        }
    }
    loadedSpeciesList(data) {
        this.setState({
            species: data.map(s => (<option className="speciesSelectionBox" key={s.id} value={s.id}>{s.genus.toUpperCase().slice(0,1)}. {s.species}</option>))
        });
    }
    render() {
        return (<select name="duderonoumous">
                    {this.state.species}
                </select>);

    }
}

export default SpeciesSelectBox;
