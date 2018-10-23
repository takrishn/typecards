import * as React from 'react';
import './App.css';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import SideNav from './Sidenav';
import {openNav} from './Sidenav';


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
          <header className="App-header">

            <table className="Headertable">
              <tr>
                <td className="Headercolm">
                  <button className="Opennav" onClick={this.openNavOnClick}>☰</button>
                </td>
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
