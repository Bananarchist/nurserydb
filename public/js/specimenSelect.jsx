import React from 'react';
import ReactDOM from 'react-dom';

function fetchAllSpecimen() {
    return fetch("/specimen/", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(data=>data.json());
}

class SpecimenSelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specimen: []
        };

    }
    componentDidMount() {
        fetchAllSpecimen().then(
            (data) => this.loadedSpecimenList(data)
        );
    }
    loadedSpecimenList(data) {
        this.setState({
            specimen: data.map(s => (<option className="specimenSelectBox" key={s.id} value={s.id}>{s.genus.toUpperCase().slice(0,1)}. {s.specimen}</option>))
        });
    }
    render() {
        return (<select name="duderonoumous">
                    {this.state.specimen}
                </select>);

    }
}

export {SpecimenSelectBox};
