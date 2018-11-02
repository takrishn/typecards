import * as React from 'react';
import {openNav} from './Sidenav';

// name that appears on the top bar of the webpage
interface IProps {
  name?: string;
}

function openNavOnClick() {
    // makes SideNav appear on click
    openNav();
  };

// its really only the deck name. not even the layout
const Header: React.SFC<IProps> = (props: IProps) => (
    <header className="App-header">

        <table className="Headertable">
            <tr>
            <td className="Headercolm">
                <button className="Opennav" onClick={openNavOnClick}>☰</button>
            </td>
            <td className="Headercolm"><h3>{props.name}</h3></td>
            <td className="Headercolm" />
            </tr>
        </table>
            
    </header>
);

Header.defaultProps = {
  name: 'deck',
};

export default Header;