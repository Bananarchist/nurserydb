import React from "react";
import SpeciesSelectBox from "speciesSelect.jsx";

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
    }
    render() {
        return(
            <form id="speciesform">
                <SpeciesSelectBox />
                <input className="form-control" type="number" name="quantity" />
                <input className="form-control" type="text" name="size" />
                <input className="form-control" type="text" name="planter" />
                <input className="form-control" type="text" name="source" />
                <input className="form-control" type="text" name="location" />
                <button className="button" type="button">Save</button>
            </form>
        );
    }
}
