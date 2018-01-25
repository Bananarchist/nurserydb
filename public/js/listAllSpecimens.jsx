import React from "react";
import basicList from "./basicList.jsx";

function fetchAllSpecimen() {
    return fetch("/specimen/all", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(data=>data.json());
}

class ListAllSpecimens extends basicList {
    constructor(props) {
        super(props);
        //this.state.columns = {columns: ["id","species", "genus", "quantity","size","source","location","planter"]}));
        this.state.columns = {
            "id": "ID",
            "genus": "Genus",
            "species": "Species",
            "quantity": "Quantity",
            "size": "Size",
            "source": "Source",
            "location": "Location",
            "planter": "Who made this"
        };
        this.state.records=[];
        this.openTab = props.openTab;
    }
    componentDidMount() {
        fetchAllSpecimen().then(
            (data) => {
                this.setState({records: data});
            }
        );
    }
}

export default ListAllSpecimens;
