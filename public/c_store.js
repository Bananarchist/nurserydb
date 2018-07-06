function getRecordBy(list, data) {
    if(data.hasOwnProperty("id")) {
        return fetch(`/${list}/${data.id}`, {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            method:"GET",
        })
        .then(data=>data.json());
    }
}

function filterRecords(list, filters) {
    return fetch(`/${list}/`, {
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        method:"GET",
    })
    .then(data=>data.json());
}

export default {
    data: {
        collections: [],
        collections_retrieved: null,
        species: [],
        species_retrieved: null,
    },
    getCollectionBy() {
        if(arguments.length) {
            return getRecordBy("collection", arguments[0]);
        }
    },
    getSpeciesBy() {
        if(arguments.length) {
            return getRecordBy("species", arguments[0]);
        }
    },
    filterCollections() {
        return filterRecords("collection")
            .then(data => {
                this.data.collections = data;
                return data;
            });

    },
    filterSpecies() {
        return filterRecords("species")
            .then(data => {
                this.data.species = data;
                return data;
            });;
    }

}
