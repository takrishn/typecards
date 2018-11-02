import * as React from 'react';
import '../stylesheets/Deck.css';
import Description from './Deck_description';
import Footer from './Deck_footer';
import SideNav from './Sidenav';
// this is the deck page where the flash cards are displayed
// Deck.tsx is made up of the description (the cards), the
// footer (the prompt after you reveal the answer), and the
// side navigation menu

class App extends React.Component {

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
