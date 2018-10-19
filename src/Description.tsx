import * as React from 'react';

// these are the cards in the body
class Description extends React.Component {

  // animation for the answer cards to slide down
  

  public render() {
    return (
      <div>
        <a href="#nav"><div className="Boxed">
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