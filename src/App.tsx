import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';

class App extends React.Component {
  public openNav = () => {
      const mySidenav: HTMLElement | null= document.getElementById("mySidenav"); 
      if (mySidenav === null) {return};
      
      mySidenav.style.width = "250px";
  };

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
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
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
        </div>
      </body>
    );
  }
}

export default App;
