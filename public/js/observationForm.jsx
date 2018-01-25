import React from "react";

export default class ObservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Good",
            comment: "",
            specimenID: 0,
            id: null,
            created: new Date()
        }
        if(props.hasOwnProperty("comment")) {
            Object.assign(this.state, props.comment);
            //otherwise we're to assume this is a new comment
        }
        if(props.hasOwnProperty("specimen")) {
            this.state.specimenID = props.specimen;
            //should have this if not a "comment" field
        }
        if(props.hasOwnProperty("commentAdded")) {
            this.commentAdded = props.commentAdded;
        }


    }
    handleSubmit(e) {
        //Save

        //send up the food chain
        if(this.commentAdded) {
            this.commentAdded({status:this.state.status, comment: this.state.comment, specimen_id: this.state.specimenID, id: null, created: this.state.created})
        }
        e.preventDefault();
    }
    handleChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        e.preventDefault();
    }
    render() {
        return(
            <form className="" onSubmit={e=>this.handleSubmit(e)}>
                <h5 className="mb-1 text-black">Record an observation:</h5>
                <div className="form-group">
                    <label htmlFor="statusSelect">Current status</label>
                    <select name="status" value={this.state.status} id="statusSelect" className="form-control" onChange={e=>this.handleChange(e)}>
                        <option value="Good">Good</option>
                        <option value="Passable">Passable</option>
                        <option value="Bad">Bad</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="commentBox">Optional comments</label>
                    <textarea name="comment" value={this.state.comment} className="form-control" onChange={e=>this.handleChange(e)}></textarea>
                </div>
                <button className="btn" type="button" onClick={e=>this.handleSubmit(e)}>Save Observation</button>

            </form>
        )
    }
}
