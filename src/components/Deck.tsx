import * as React from 'react';
import Description from './Deck_description';
import Footer from './Deck_footer';

// this is the deck page where the flash cards are displayed
// Deck.tsx is made up of the description (the cards), the
// footer (the prompt after you reveal the answer), and the
// side navigation menu

class DeckContent extends React.Component {

  public render() {
    return (
      <div className="App-deck">
        <br /> <br />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default DeckContent;
