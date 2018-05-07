function fetchAllSpecimen() {
    return fetch("/specimen/all", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(data=>data.json());
}

function fetchCommentsForSpecimen(id) {
    return fetch(`/observation/forSpecimen/${id}`, {
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
    });
}

function saveCommentForSpecimen(id, comment, status) {
    return fetch(`/observation/forSpecimen/${id}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            comment: comment,
            status: status,
        })
    })
    .then(data => data.json());
}

function saveSpecimen(record, id) {
    let url = id ? `/${id}` : "";
    return fetch(`/specimen${url}`, {
        method: id ? "PUT" : "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(record)
    })
    .then(()=>record);
}

function saveSpecies(genus, species) {
    return fetch(`/species`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            species: species,
            genus: genus,
        })
    })
    .then(data => data.json());
}

function deleteSpecimen(id) {
    return fetch(`/specimen/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(data => data.json());
}

export {fetchAllSpecimen, fetchCommentsForSpecimen, saveCommentForSpecimen, saveSpecies, saveSpecimen, deleteSpecimen}
