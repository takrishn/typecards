import * as React from 'react';
import {openFooter} from './Deck_footer'

// the body of the Deck.tsx page
// these are the cards in the body

class Description extends React.Component {

  public openFooterOnClick = () => {
    // makes footer appear on click
    openFooter();
  };

  public render() {
    return (
      <div className="App-description">
        <a href="#nav" onClick={this.openFooterOnClick}><div className="Boxed">
          <p>Question</p>
        </div></a>

        <div className="Expandable" id="nav">
          <div className="Boxed" id="ans1">
            <p>Answer</p>
          </div>

          <div className="Boxed" id="ans2">
            <p>Answer</p>
          </div>
          
          <div className="Boxed" id="ans3">
            <p>Answer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;