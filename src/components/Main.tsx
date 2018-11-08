import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DeckSelection from "./Deckselection";
import Deck from "./Deck";

// this page handles the routes that will be used in App.tsx
// it returns the component based on location

class Main extends React.Component {

    public render() {
        return (
        <Router>
            <div>
                <Route exact path='/' component={DeckSelection}/>
                <Route path='/deck' component={Deck}/>
            </div>
        </Router>
        );
    }
}

export default Main;