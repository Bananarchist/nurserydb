import BasicList from "./basicList.jsx";
import React from "react";
import parseColumnArray from "./parseColumnArray";

class QueryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query:""};
        this.openTab = props.openTab;
        this.parseColumnArray = parseColumnArray;
    }
    updateQuery(e) {
        this.setState({query: e.target.value});
    }
    runQuery(e) {
        if(this.state.query) {
            return fetch("/query/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({query: this.state.query})
            })
            .then(data => {
                data.json().then(
                    d => {
                        if(d.length) {
                            let c = this.parseColumnArray(Object.keys(d[0]));
                            this.openTab(`${this.state.query}`, <BasicList records={d} columns={c} openTab={this.openTab.bind(this)} />, true);
                            //this.setState({records:d, columns:c});
                        } else {
                            this.setState({records:[], columns:[]});
                        }
                    }
                );
            });
        }
    }
    render() {
        return (
            <form>
                <textarea className="form-control" value={this.state.query} onChange={e => this.updateQuery(e)} />
                <button className="button" type="button" onClick={e => this.runQuery(e)}>Run</button>
            </form>
        );
        //<basic-list records={this.state.records} columns={this.state.columns} />
    }
}

export default QueryList;
