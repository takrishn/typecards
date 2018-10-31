import * as React from 'react';

// name is deck name
interface IProps {
  name?: string;
}

// its really only the deck name. not even the layout
const Header: React.SFC<IProps> = (props: IProps) => (
  <h3>{props.name}</h3>
);

Header.defaultProps = {
  name: 'deck',
};

export default Header;