import * as React from 'react';
import {openFooter} from './Footer'
// import Slide from 'react-reveal/Slide';

// these are the cards in the body
class Description extends React.Component {

  public openFooterOnClick = () => {
    // makes footer appear on click
    openFooter();
  };

  public render() {
    return (
      <div>
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