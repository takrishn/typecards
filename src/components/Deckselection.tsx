import * as React from 'react';

// this is the deck selection page. The landing page.
// displays the decks you have and information on click

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
    
    public render() {
        return (
        <div className="App-selectionmenu">
        <br /> <br />
            <div className="Selectionmenu">
                <button className="Accordion" id="acc1" onClick={this.handleClick.bind(this)}>Section 1</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

                <button className="Accordion" id="acc2" onClick={this.handleClick.bind(this)}>Section 2</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

                <button className="Accordion" id="acc3" onClick={this.handleClick.bind(this)}>Section 3</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

            </div>
        </div>
        );
    }
}

export default DeckSelection;