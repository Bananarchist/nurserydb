import React from "react";
import ListAllSpecimens from "./listAllSpecimens.jsx";
import CreateNewSpecimen from "./createSpecimen.jsx";
import QueryList from "./queryList.jsx";
import basicList from "./basicList.jsx";
import ErrorBoundary from "./errorBoundary.jsx";

class BaseList extends basicList {}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabs:[], current_tab:0, collections:[]};
    }
    componentDidMount() {
        fetch("/specimen/all", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(data=>data.json())
        .then(data=> {
            return data.map(
                s => {
                    s.created = new Date(s.created);
                    s.lastObservationMade = new Date(s.lastObservationMade);
                    return s;
                }
            )
        })
        .then(data=> {
            return data.sort((a,b) =>  a.created-b.created);
        })
        .then(
            data => {
                this.setState({collections:data});
                this.openBaseListTab();
            }
        );
    }

    switchTab(toTab, eventObj) {
        //set styling on current_tab and toTab
        if(toTab >= 0 && toTab < this.state.tabs.length) {
            this.setState({current_tab: toTab});
        }
    }
    openTab(tab_name, tab_src, switch_on_open) {
        let tab_idx = this.state.tabs.push({title:tab_name, src:tab_src}) - 1;
        //if too many tabs, don't open
        let update_state = {
            tabs: this.state.tabs,
        }
        if(switch_on_open) {
            update_state.current_tab = tab_idx;
        }
        this.setState(update_state);
    }
    openBaseListTab(columns, records) {
        let c = {
            id: {title: "ID", column:"id", type:"Number"},
            species: {column: "species", type: "String", title: "species"},
            genus: {column: "genus", type: "String", title: "genus"},
            quantity: {column: "quantity", type: "Number", title: "quantity"},
            size: {column: "size", type: "String", title:"size"},
            source: {column: "source", type: "String", title: "source"},
            location: {column: "location", type: "String", title: "location"},
            planter: {column: "planter", type: "String", title: "planter"},
            created: {column: "created", type: "Date", title: "created"},
            totalObservations: {column: "totalObservations", type: "Number", title: "comments"},
            lastObservationMade: {column: "lastObservationMade", type: "Date", title: "last comment"}};
        let r = this.state.collections;
        if(columns) {
            c = columns;
        }
        if(records) {
            r = records;
        }
        this.openTab("List", <BaseList columns={c} records={r} openTab={this.openTab.bind(this)} />, true);
    }
    deleteTab(tab_idx) {
        let update_state = {
            tabs: this.state.tabs,
            current_tab: this.state.current_tab,
        }
        update_state.tabs.splice(tab_idx, 1);
        if(this.state.current_tab >= tab_idx) {
            update_state.current_tab--;
        } else {
            update_state.current_tab++;
        }
        if(this.state.current_tab == 0) {
            update_state.current_tab = 0;
        }
        this.setState(update_state);
    }
    render() {
        return (
            <div id="prime_container" className="pos-f-t">
                <div className="collapse" id="mahhamburger">
                    <div className="bg-dark p-4">
                        <ul>
                            <li>
                                <a href="#" onClick={e=>{e.preventDefault(); this.openBaseListTab();}}>List all</a>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#queryDiv">Query</a>
                                <div className="collapse" id="queryDiv">
                                    <QueryList openTab={this.openTab.bind(this)} />
                                </div>
                            </li>
                            <li>Create New Entry</li>
                        </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type='button' data-toggle="collapse" data-target="#mahhamburger">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                    <ul className="nav nav-pills nav-justified bg-secondary">
                    {this.state.tabs.map((t,idx) => {
                        return (
                            <li className="nav-item" key={idx}>
                                <a className={ idx==this.state.current_tab && "nav-link active" || "nav-link"} href="#" onClick={e => {
                                    e.preventDefault();
                                    this.switchTab(idx, e);
                                }}>
                                    {t.title}
                                    <button type="button" className="close" aria-label="Close" onClick={e => {
                                        e.preventDefault();
                                        this.deleteTab(idx);
                                    }}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                    <div id="tabcontentcontainer">
                        {this.state.tabs.length ? this.state.tabs.map(
                            (t, i) => {
                                let inner = t.src;
                                if(i==this.state.current_tab) {
                                    return <div key={i}>{t.src}</div>;
                                } else {
                                    return <div key={i} className="d-none">{t.src}</div>
                                }
                            }
                        ) : "Loading..."}
                    </div>
            </div>
        );
    }
}

export default App;
