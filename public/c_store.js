var default_headers = () => {
    return {
        "content-type": "application/json",
        "accept": "application/json",
        "x-access-token": getToken(),
    }
}

function actOnRecord(action, list, filter, body) {
    if(filter.hasOwnProperty("id")) {
        return fetch(`/${list}/${filter.id}`, {
            credentials: "include",
            headers: default_headers(),
            method: action,
            body: JSON.stringify(body),
        })
        .then(data=>data.json());
    }
}

function getToken() {
    let cookie = document.cookie.match(/token=(.*);*/);
    if(cookie && cookie.length) return cookie[1];
    return null;
}

function createRecord(list, data) {
    return fetch(`/${list}/`, {
        method: "PUT",
        headers: default_headers(),
        credentials: "include",
        body: JSON.stringify(data)
    })
    .then(data=>data.json())
}

function getRecordBy(list, data) {
    return actOnRecord("GET", list, data);
}

function deleteRecordBy(list, data) {
    return actOnRecord("DELETE", list, data);
}

function editRecordBy(list, data, body) {
    return actOnRecord("POST", list, data, body);
}

function filterRecords(list, filters) {
    return fetch(`/${list}/`, {
        credentials: "include",
        headers: default_headers(),
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
    getToken,
    login(data) {
        return fetch("login", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(data)
        })
    },
    collection: {
        byID(id) {
            return {
                drop() {
                    return deleteRecordBy("collection", {id});
                },
                update(data) {
                    return editRecordBy("collection", {id}, data);
                },
                read() {
                    return getRecordBy("collection", {id});
                }
            };
        },
        bySpecies(species_id) {
            return fetch(`/species/${species_id}/collections`, {
                credentials: "include",
                headers: default_headers(),
                method:"GET",
            }).then(data=>data.json());
        },
        create(data) {
            return createRecord("collection", data);
        },
        all() {
            return filterRecords("collection");
        }
    },
    species: {
        byID(id) {
            return {
                drop() {
                    return deleteRecordBy("species", {id});
                },
                update(data) {
                    return editRecordBy("species", {id}, data);
                },
                read() {
                    return getRecordBy("species", {id});
                }
            };
        },
        create(data) {
            return createRecord("species", data);
        },
        all() {
            return filterRecords("species");
        },
        shortList() {
            return fetch(`/species/short`, {
                credentials: "include",
                headers: default_headers(),
                method:"GET",
            }).then(data=>data.json());
        }
    },
    category: {
        byID(id) {
            return {
                update(data) {
                    return editRecordBy("category", {id}, data);
                },
                read() {
                    return getRecordBy("category", {id});
                },
            };
        }
    },
    tags: {
        byID(id) {
            return {
                update(data) {
                    //not implemented
                    //should update all species with tag x to have tag y instead
                },
                read() {
                    return getRecordBy("tag", {id});
                }
            }
        },
        all() {
            //not implemented
        },
    }
}
