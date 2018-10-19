import * as React from 'react';

// names are names of buttons
interface IProps {
    hard?: string;
    ok?: string;
    easy?: string;
}

const Footer: React.SFC<IProps> = (props: IProps) => (
    <div className="App-footer">
        <p>Learning Rate</p>
        <button className="Footerbutton">{props.hard}</button><div className="Divider"/>
        <button className="Footerbutton">{props.ok}</button><div className="Divider"/>
        <button className="Footerbutton">{props.easy}</button>
    </div>
  
);

Footer.defaultProps = {
    easy: 'easy',
    hard: 'hard',
    ok: 'ok',
};

export default Footer;