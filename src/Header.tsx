import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <h3>{props.name}</h3>
);

Header.defaultProps = {
  name: 'deck',
};

export default Header;