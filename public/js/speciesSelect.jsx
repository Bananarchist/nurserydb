import React from 'react';
import ReactDOM from 'react-dom';

function fetchAllSpecies() {
    return fetch("/species/", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
    .then(data => data.json())
    .then(data => {
        return data.map(
            (r,i) => {
                r.fullname = `${r.genus} ${r.species}`;
                return r;
            }
        )
    });
}

export default class SpeciesSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            suggestions: "No suggestions",
            species: "",
        };
        if(this.props.species && this.props.species.length) {
            this.setState({species:this.props.species});
        }

    }
    componentDidMount() {
        if(!this.state.options.length) {
            fetchAllSpecies().then(
                (data) => this.loadedSpeciesList(data)
            );
        }
    }
    loadedSpeciesList(data) {
        this.setState({
            options: data
        });
    }
    filterList(search_string) {

    }
    handleChange(e) {
        let suggestions = this.state.options;//.map(o=>o.fullname);
        let species = e.target.value;
        this.setState({suggestions,species});
        e.preventDefault();
    }
    render() {
        return (
            <div className="form-group">
                <legend htmlFor="speciesInput">Species</legend>
                <input list="speciesSuggestionBox" type="text" value={this.state.species} name="species" className="form-control" id="speciesInput" onChange={e=>this.handleChange(e)}/>
                <datalist id="speciesSuggestionBox">
                    {typeof this.state.suggestions == "string" ? this.state.suggestions : this.state.suggestions.map((s,i)=><option key={i} value={s.id}>{s.fullname}</option>)}
                </datalist>
            </div>

        );

    }
}
