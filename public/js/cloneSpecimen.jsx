import React from "react";
import ReactDOM from "react-dom";
import SpeciesSelectBox from "./speciesSelect.jsx";

let dupe_orig = (o) => {
    return {
        species: o.species,
        genus: o.genus,
        quantity: o.quantity,
        planter: o.planter,
        location: o.location,
        source: o.source,
        size: o.size,
        duplicateObservations: false,
    }
}

class CloneSpecimen extends React.Component {
    constructor(props) {
        super(props);
        //sort out data from specimen
        this.original = props.original
        let el1 = dupe_orig(this.original);
        let el2 = dupe_orig(this.original);
        el1.quantity = Math.floor(el1.quantity/2);
        el2.quantity = Math.floor(el2.quantity/2);
        this.max = props.max;
        this.state = {
            clones: [el1, el2],
        };
    }
    addNewClone() {
        let index = this.state.clones.length;
        this.state.clones.push({

        });
        this.setState({clones: this.state.clones});
    }
    deleteClone(cloneIndex) {
        if(this.state.clones.length < 3) {
            return false; //not really cloning if you're only doing one
        }
        this.state.clones.splice(cloneIndex, 1);
        this.setState({clones: this.state.clones});
    }
    renderForm(form, length, index) {
        if (length) {
            let actions = [];
            if (length > 2) {
                actions.push(<button className="button" type="button" onClick={e=>this.deleteClone(index)}>Delete</button>);
            }
            if (index+1 == length) {
                actions.push(<button className="button" type="button" onClick={e=>this.addNewClone()}>Add Clone</button>)
            }
            return(
                <form id="speciesform">
                {form.genus} {form.species}
                <input className="form-control" type="number" name="quantity" /> out of {this.max} originally
                <input className="form-control" type="text" name="size" />
                <input className="form-control" type="text" name="planter" />
                <input className="form-control" type="text" name="source" />
                <input className="form-control" type="text" name="location" />
                <input type="checkbox" className="form-control" name="duplicateObservations" /> duplicate original observations for this clone
                {actions}
                </form>
            );

        }
    }
    render() {
        return(
            <form id="speciesform">
                {this.clones.map((f,i,a) => this.renderForm(f,a.length,i))}
            </form>
            <div>

        )
    }
}

export default CloneSpecimen;
