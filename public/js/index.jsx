import React from "react";
import ReactDOM from "react-dom";
import SpeciesSelectBox from "./speciesSelect.jsx";
import SpecimenBox from "./specimenBox.jsx";
import ObservationForm from "./observationForm.jsx";
import ObservationList from "./observationList.jsx";
import App from "./app.jsx";

window.createSpecimen = () => {
    ReactDOM.render(
        <SpeciesSelectBox />,
        document.getElementById('speciesSelectBox')
    );
}

/*window.viewSpecimen = () => {
    ReactDOM.render(
        <SpecimenBox specimen={slist} />,
        document.getElementById('specimenSelectBox')
    );
    ReactDOM.render(
        <ObservationForm specimen={slist} />,
        document.getElementById('specimenSelectBox')
    );
    ReactDOM.render(
        <ObservationList specimen={slist} />,
        document.getElementById('specimenSelectBox')
    );
}*/

window.mountApp = (element_id) => {
    ReactDOM.render(
        <App />,
        document.getElementById(element_id)
    );
}
