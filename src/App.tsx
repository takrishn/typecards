import * as React from 'react';
import './App.css';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';


class App extends React.Component {

  // open side bar
  public openNav = () => {
    const mySidenav: HTMLElement | null= document.getElementById("mySidenav"); 
    if (mySidenav === null) {return};
    
    mySidenav.style.width = "250px";
  };

  // close side bar
  public closeNav = () => {
    const mySidenav: HTMLElement | null= document.getElementById("mySidenav"); 
    if (mySidenav === null) {return};

    mySidenav.style.width = "0px";
  };

  public render() {
    return (
      <body>
  
        <div id="mySidenav" className="Sidenav">
          <button className="Closenav" onClick={this.closeNav}>×</button>
          <a href="#">Decks</a>
          <a href="#">Add Card</a>
          <a href="#">Whats webdev</a>
          <a href="#">Options</a>
        </div>

        <div className="App">
          <header className="App-header">

            <table className="Headertable">
              <tr>
                <td className="Headercolm"><button className="Opennav" onClick={this.openNav}>☰</button></td>
                <td className="Headercolm"><Header name="Deck" /></td>
                <td className="Headercolm" />
              </tr>
            </table>
            
          </header>
          <br /> <br />

          <Description />
          <Footer />
        </div>
        
        
        
      </body>
    );
  }
}

export default App;
