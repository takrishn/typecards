import * as React from 'react';

// open side bar
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
    
    // openNavOnClick is found in App.tsx

    public closeNavOnClick = () => {
        // makes SideNav appear on click
        closeNav();
    };

    public render() {
      return (
        <div id="mySidenav" className="Sidenav">
          <button className="Closenav" onClick={this.closeNavOnClick}>×</button>
          <a href="#">Decks</a>
          <a href="#">Add Card</a>
          <a href="#">Whats webdev</a>
          <a href="#">Options</a>
        </div>
      );
    }
  }

export default SideNav;