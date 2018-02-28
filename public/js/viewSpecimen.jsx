import React from "react";
import ObservationForm from "./observationForm.jsx";
import CollectionForm from "./collectionForm.jsx";

class ViewSpecimen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        if(Number.isInteger(props.specimen)) {
            this.state.specimen = {
                id: props.specimen
            };
        } else {
            this.state.specimen = props.specimen;
        }
        this.state.comments = [];
        if(props.hasOwnProperty("openTab")) {
            this.openTab=props.openTab;
        }
    }
    componentDidMount() {
        this.loadComments();
    }
    handleComment(comment) {
        this.state.comments.unshift(comment);
        this.setState({comments: this.state.comments});
        //just load comments eventually probable
        //this.loadComments();
    }
    loadComments() {
        fetch(`/observation/forSpecimen/${this.state.specimen.id}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(data => data.json())
        .then(data => {
            return data.map(
                c => {
                    c.created = new Date(c.created);
                    return c;
                }
            )
        })
        .then(data => {
            return data.sort((a,b) => -(a.created-b.created));
        })
        .then(
            data => {
                this.setState({comments:data});
            }
        )
    }
    render() {
        let colorFor = (c) => {
            return {"Good":"success", "Passable":"warning"}[c] || "light";
        }
        return (
            <div className="card">
                <div className={`card-header text-white bg-${colorFor(this.state.comments.length ? this.state.comments[0].status : null)}`}>
                    <h1><i>{this.state.specimen.genus} {this.state.specimen.species}</i> (ID: {this.state.specimen.id}) <a href="#" onClick={e=>{e.preventDefault();this.openTab(`Updating ID#${this.state.specimen.id}`, <CollectionForm collection={this.state.specimen} openTab={this.openTab.bind(this)} />, true);}}>✏️</a></h1>
                </div>
                <div className="card-body">
                    Location: {this.state.specimen.location}<br />
                    <div id="commentsBox" className="list-group">
                        {this.state.comments.map(
                            (c,i)=> {
                                return (
                                    <a key={i} href="#" className="list-group-item">
                                        <div className="">
                                            <h5 className={`mb-1 text-${colorFor(c.status)}`}>{c.status}</h5>
                                            <small>{c.created.toLocaleString()}</small>
                                        </div>
                                        <p className="mb-1">{c.comment}</p>
                                    </a>
                                )
                            }
                        )}
                        <a href="#" className="list-group-item">
                            <ObservationForm specimen={this.state.specimen.id} commentAdded={this.handleComment.bind(this)} />

                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewSpecimen;
