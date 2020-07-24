import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Counter from "./Components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));
serviceWorker.unregister();
