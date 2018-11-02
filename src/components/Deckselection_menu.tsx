import * as React from 'react';

var acc = document.getElementsByClassName("Accordion");
var i;


class SelectionMenu extends React.Component {
    constructor(props: Readonly<{}>){
        super(props);
        this.listenForAccordion = this.listenForAccordion.bind(this);
    }

    // opens and closes the accordian menu 
    public listenForAccordion(): void {
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
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
        );
    }
}

export default SelectionMenu;