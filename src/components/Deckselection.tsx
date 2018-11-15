import * as React from 'react';

// this is the deck selection page. The landing page.
// displays the decks you have and information on click

// this file is kind of messy, just because I didn't split things up
// into separate components.
// contains the search bar, the decks, and their respective stats/buttons

class DeckSelection extends React.Component{
    
    // opens the accordion on click based on ID
    handleClick = (e:any) => {
        var acc = document.getElementById(e.target.id)
        acc.classList.toggle("active");
        var panel = acc.nextElementSibling as HTMLElement;
        if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    }

    private searchBar = () => {
        // responsible the search bar hiding elements not matching
        var input, menu, acc, specificAcc, respectivePanel, name, i;
        input = (document.getElementById("searchInput") as HTMLInputElement).value.toUpperCase();
        menu = document.getElementById("deckmenu");
        acc = menu.getElementsByClassName("Accordion");

        // loop through all the rows and hide those that dont match the search query
        for (i = 0; i < acc.length; i++) {
            specificAcc = document.getElementById(acc[i].id) as HTMLInputElement;
            respectivePanel = specificAcc.nextElementSibling as HTMLElement; // hide the panel too
            name = specificAcc.value; //the accordion value matches the name of the deck

            if (name.toUpperCase().indexOf(input) > -1) {
                specificAcc.style.display = "";
                respectivePanel.style.display = "";
            }
            else {
                specificAcc.style.display = "none";
                respectivePanel.style.display = "none";
            }
        }  
      };
    
    public render() {
        return (
        <div className="App-selectionmenu">
            <br /> <br />
            <div>
                <input className="SearchBar" type="text" id="searchInput" onKeyUp={this.searchBar} placeholder="Search for deck"></input>
            </div>

            <div className="Selectionmenu" id="deckmenu">
                
                <br></br>
                <button className="Accordion" id="acc1" value="language 1" onClick={this.handleClick.bind(this)}>
                    language 1<button className="Studybutton">Study (35)</button>
                </button>
                <div className="Panel">
                    <table className="Paneltable">
                        <tr>
                            <td>Total Cards in Deck:</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Cards Learned:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Cards to Review:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>New Cards:</td>
                            <td>15</td>
                        </tr>
                    </table>
                    <button className="Editbutton">Edit Deck</button>
                </div>

                <button className="Accordion" id="acc2" value="math 2" onClick={this.handleClick.bind(this)}>
                    math 2<button className="Studybutton">Study (20)</button>
                </button>
                <div className="Panel"> 
                    <table className="Paneltable">
                        <tr>
                            <td>Total Cards in Deck:</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Cards Learned:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Cards to Review:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>New Cards:</td>
                            <td>15</td>
                        </tr>
                    </table>
                    <button className="Editbutton">Edit Deck</button>
                </div>

                <button className="Accordion" id="acc3" value="angle 3" onClick={this.handleClick.bind(this)}>
                    angle<button className="Studybutton">Study (50)</button>
                </button>
                <div className="Panel">
                    <table className="Paneltable">
                        <tr>
                            <td>Total Cards in Deck:</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Cards Learned:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Cards to Review:</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>New Cards:</td>
                            <td>15</td>
                        </tr>
                    </table>
                    <button className="Editbutton">Edit Deck</button>
                </div>

            </div>
        </div>
        );
    }
}

export default DeckSelection;