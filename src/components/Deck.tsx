import * as React from 'react';
import '../stylesheets/App.css';
import Description from './Description';
import Footer from './Footer';
import SideNav, {openNav} from './Sidenav';
// this is the deck page where the flash cards are displayed
// Deck.tsx is made up of the description (the cards) and the
// footer (the prompt after you reveal the answer)

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
          <Description />
          <Footer />
        </div>
        
      </body>
    );
  }
}

export default App;
