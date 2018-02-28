import React from "react";
import SpeciesSelect from "./speciesSelect.jsx";

export default class CollectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            created: new Date()
        }
        if(props.hasOwnProperty("specimen")) {
            this.state.specimenID = props.specimen;
            //should have this if not a "comment" field
        }
        if(props.hasOwnProperty("collection")) {
            Object.assign(this.state, props.collection);
        }
        if(props.hasOwnProperty("openTab")) {
            this.openTab=props.openTab;
        }
    }
    handleChange(e) {
        let changestate = {};
        changestate[e.target.name] = e.target.value;
        this.setState(changestate);
        e.preventDefault();
    }
    handleSubmit(e) {

    }
    outputFormControl(key, type="text", title) {
        if(!title) {
            title=key;
        }
        return (
            <div className="form-group">
                <legend htmlFor={`${key}Input`}>{title}</legend>
                <input className="form-control" type={type} name={key} value={this.state[key]} id={`${key}Input`} onChange={e=>this.handleChange(e)}/>
            </div>
        )
    }
    render() {
        return(
            <form id="speciesform">
                <SpeciesSelect />
                {this.outputFormControl("quantity", "number")}
                {this.outputFormControl("size")}
                {this.outputFormControl("planter")}
                {this.outputFormControl("source")}
                {this.outputFormControl("location")}
                <button className="button" type="button">Save</button>
            </form>
        );
    }
}
