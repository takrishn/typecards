import * as React from 'react';
import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav, {openNav} from './components/Sidenav';


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
