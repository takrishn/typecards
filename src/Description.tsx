import * as React from 'react';

class Description extends React.Component {
  public render() {
    return (
      <div>
        <a href="#nav"><div className="Boxed">
          <p>Question</p>
        </div></a>

        <div className="Expandable" id="nav">
          <div className="Boxed" id="ans1">
            <p>You</p>
          </div>
          <div className="Boxed" id="ans2">
            <p>can</p>
          </div>
          <div className="Boxed" id="ans3">
            <p>read.</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Description;