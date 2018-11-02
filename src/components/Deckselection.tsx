import * as React from 'react';
import '../stylesheets/Deckselection.css';
import SelectionMenu from './Deckselection_menu';
import SideNav, {openNav} from './Sidenav';

// this is the deck selection page where you choose a deck
// you want to study. 



class App extends React.Component {

  public openNavOnClick = () => {
    // makes SideNav appear on click
    openNav();
  };

  public render() {
    return (
      <body>
        <SideNav />

        <div className="App">
          <br /> <br />
          <SelectionMenu />
        </div>
        
      </body>
    );
  }
}

export default App;
