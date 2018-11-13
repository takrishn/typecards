import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import App from "./components/App";

ReactDOM.render(
    <Header name="deckhello" />,
    document.getElementById("headerbar")
);

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("pagecontent")
);