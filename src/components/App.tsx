import * as React from 'react';
import SideNav from "./Sidenav";
import Main from './Main';
import '../stylesheets/App.css';

//the page that renders everything

class App extends React.Component {

    public render() {
      return (
        <div>
            <SideNav />
            <Main />
        </div>
      );
    }
  }

export default App;