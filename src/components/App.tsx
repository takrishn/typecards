import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../stylesheets/App.css';

import SideNav from "./Sidenav";
import DeckSelection from "./Deckselection";
import Deck from "./Deck";


//the page that renders everything and chooses the path component

class App extends React.Component {

    public render() {
      return (
        <Router>
          <div>
              <SideNav />
              <Switch>
                <Route exact path='/' component={DeckSelection}/>
                <Route path='/deck' component={Deck}/>
              </Switch>
          </div>
        </Router>
      );
    }
  }

export default App;