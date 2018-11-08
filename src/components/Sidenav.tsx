import * as React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

// open side bar menu

// open the side bar
export function openNav(){
    const mySidenav: HTMLElement | null= document.getElementById("mySidenav"); 
    // mySidenav "might return null" -rolls eyes-
    if (mySidenav === null) {return};
    
    mySidenav.style.width = "250px";
};

// close side bar
export function closeNav() {
    const mySidenav: HTMLElement | null= document.getElementById("mySidenav"); 
    if (mySidenav === null) {return};
    mySidenav.style.width = "0px";
};


class SideNav extends React.Component {
    
    // openNavOnClick is found in Header.tsx

    public closeNavOnClick = () => {
        // makes SideNav close on click
        closeNav();
    };

    public render() {
      return (
        <Router>
          <div id="mySidenav" className="App-sidenav">
            <button className="Closenav" onClick={this.closeNavOnClick}>×</button>
            <NavLink to="/">Decks</NavLink>
            <NavLink to="/addcard">Add Card</NavLink>
            <NavLink to="/deck">Temp Link</NavLink>
            <NavLink to="/options">Options</NavLink>
          </div>
        </Router>
      );
    }
  }

export default SideNav;