import * as React from 'react';
// the footer appears after the answer card is revealed to the user
// prompting the user for the difficulty rating

// names are names of buttons
interface IProps {
    hard?: string;
    ok?: string;
    easy?: string;
}

export function  openFooter() {
    // makes the footer appear
    const myFooter: HTMLElement | null= document.getElementById("footer"); 
    const myFooterp: HTMLElement | null= document.getElementById("footerp");
    
    if (myFooter === null) {return};
    if (myFooterp === null) {return};

    myFooter.style.height = "auto";
    myFooter.style.paddingTop = "10px";
    myFooter.style.paddingBottom = "10px";
    myFooter.style.opacity = "1";
    myFooterp.style.opacity = "1";
    
}

const Footer: React.SFC<IProps> = (props: IProps) => (
    <div id="footer" className="App-footer">
        <p id="footerp">Learning Rate</p>
        <button className="Footerbutton">{props.hard}</button>
        <div className="Divider"/>
        <button className="Footerbutton">{props.ok}</button>
        <div className="Divider"/>
        <button className="Footerbutton">{props.easy}</button>
    </div>
  
);

Footer.defaultProps = {
    easy: 'Easy',
    hard: 'Hard',
    ok: 'OK',
};

export default Footer;