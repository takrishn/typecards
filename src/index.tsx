import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from './components/Header';
import App from "./components/Deck";

ReactDOM.render(
    <Header name="deckhello" />,
    document.getElementById("headerbar")
);

ReactDOM.render(
    <App />,
    document.getElementById("deckpage")
);