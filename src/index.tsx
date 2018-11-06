import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from './components/Header';
import SelectionMenu from "./components/Deckselection"
import SideNav from "./components/Sidenav";

ReactDOM.render(
    <Header name="deckhello" />,
    document.getElementById("headerbar")
);

ReactDOM.render(
    <SideNav />,
    document.getElementById("sidenavbar")
);

ReactDOM.render(
    <SelectionMenu />,
    document.getElementById("pagecontent")
);

/*
import App from "./components/Deck";

ReactDOM.render(
    <Header name="deckhello" />,
    document.getElementById("headerbar")
);

ReactDOM.render(
    <App />,
    document.getElementById("deckpage")
);
*/