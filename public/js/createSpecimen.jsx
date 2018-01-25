import React from "react";
import ReactDOM from "react-dom";
import SpeciesSelectBox from "./speciesSelect.jsx";

let createSpecimen = () => {
    ReactDOM.render(
        <SpeciesSelectBox />,
        document.getElementById('speciesSelectBox')
    );
}

class CreateNewSpecimen extends React.Component {
    constructor(props) {
        super(props);
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

export default CreateNewSpecimen;
