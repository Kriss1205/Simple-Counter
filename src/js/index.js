
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Counter } from "./component/Counter.jsx";

let secs = 1;

const timer = setInterval(() => {
    //render your react application
    if (secs === 999999) {
        clearInterval(timer);
    }
    ReactDOM.render(<Counter seconds={secs} />, document.querySelector("#app"));
    secs++;
}, 1000);