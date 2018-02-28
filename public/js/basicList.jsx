import React from "react";
import ViewSpecimen from "./viewSpecimen.jsx";
import parseColumnArray from "./parseColumnArray";
import ErrorBoundary from "./errorBoundary.jsx";


class basicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            columns: {},
        };
        if(props.hasOwnProperty("records")) {
            this.state.records=props.records;
        }
        if(props.hasOwnProperty("columns")) {
            if(Array.isArray(props.columns)) {
                this.state.columns = props.columns.reduce(
                    (a,c) => {
                        a[c] = {title:c, column:c, type:"String"};
                        return a;
                    }, {}
                );
            } else {
                this.state.columns=props.columns;
            }
        }
        //this.parseColumnArray = parseColumnArray;
        if(props.hasOwnProperty("openTab")) {
            this.openTab=props.openTab;
        }
    }
    exportToCSV() {
        let fileString = "";
        return fileString;
    }
    exportToCSVButtonClicked(e) {

    }
    openRecordButtonClicked() {

    }
    renderFooter() {
        return (
            <div className="fixed-bottom bg-secondary text-right" style={{"padding": "5px"}}>
                <button className="btn btn-primary" type="button" onClick={e=>this.exportToCSVButtonClicked(e)}>Export CSV</button>
            </div>
        )
    }
    renderTableHeaderRow() {
        return (
            <tr>
                {Object.keys(this.state.columns).map((c,idx)=><th key={idx} scope="col">{this.state.columns[c].title}</th>)}
            </tr>
        );
    }
    renderTableBodyRows() {
        return this.state.records.map(r=>this.renderTableBodyRow(r));
    }
    renderTableBodyRow(record) {
        return (
            <tr key={record.id}>
                {Object.keys(this.state.columns).map((c_key,idx)=> {
                    var contents = record[c_key];
                    if(this.state.columns[c_key].type=="String") {
                        contents = record[c_key];
                    }
                    if(this.state.columns[c_key].type=="Date") {
                        contents = record[c_key].toLocaleString();
                    }
                    if(this.state.columns[c_key].type=="Number") {
                        contents = parseInt(record[c_key], 10);
                    }
                    if(this.state.columns[c_key].type=="Link") {
                        contents = record[c_key]; //soon...
                    }
                    return <td key={idx}>{idx ? contents : <a href="#" onClick={e=>this.openTab(record[c_key], <ViewSpecimen specimen={record} openTab={this.openTab.bind(this)} />, true)}>{contents}</a>}</td>
                })}
            </tr>
        )
    }

    render() {
        if(this.state.records.length) {
            return (
                <div className="h-100">
                    <div className="" style={{overflow: "auto"}}>
                        <ErrorBoundary>
                            <table className="table">
                                <thead>
                                    {this.renderTableHeaderRow()}
                                </thead>
                                <tbody>
                                    {this.renderTableBodyRows()}
                                </tbody>
                            </table>
                        </ErrorBoundary>
                    </div>
                    {this.renderFooter()}
                </div>
            );
        } else {
            return (
                <strong>No results</strong>
            )
        }
    }
}

export default basicList;
