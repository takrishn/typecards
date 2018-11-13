import * as React from 'react';
import {openFooter} from './Deck_footer'

// the body of the Deck.tsx page
// these are the cards in the body

function expandCards() {
  // makes the cards appear on click of the question card
  const expandableCards: HTMLElement | null= document.getElementById("expandable-boxes"); 
  if (expandableCards === null) {return};

  
  expandableCards.style.opacity = "1";
}; 

class Description extends React.Component {

  private openOnClick = () => {
    // makes footer and answer cards appear on click
    expandCards();
    openFooter();
    
  };

  public render() {
    return (
      <div className="App-description">
        <a onClick={this.openOnClick}><div className="Boxed">
          <p>Question</p>
        </div></a>

        <div className="Expandable" id="expandable-boxes">
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