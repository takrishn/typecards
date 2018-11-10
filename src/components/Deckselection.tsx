import * as React from 'react';

// this is the page where you can select a deck from.

var acc = document.getElementsByClassName("Accordion");
var i;

class DeckSelection extends React.Component{

    // opens and closes the accordian menu 
    public listenForAccordion(): void {
        // add an event listener for each accordion object
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                // what happens on click: the panel opens and is marked active
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    }
    
    public render() {
        return (
        <div className="App-selectionmenu">
        <br /> <br />
            <div className="Selectionmenu">
                <button className="Accordion" onClick={this.listenForAccordion}>Section 1</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

                <button className="Accordion" onClick={this.listenForAccordion}>Section 2</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

                <button className="Accordion" onClick={this.listenForAccordion}>Section 3</button>
                <div className="Panel">
                <p>Lorem ipsum...</p>
                </div>

            </div>
        </div>
        );
    }
}

export default DeckSelection;