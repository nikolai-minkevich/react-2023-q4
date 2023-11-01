import React from 'react';
import './Nav.css';
import Search from '../Search';
import Logo from '../Logo';
import ThrowError from '../ThrowError';

class Navbar extends React.Component<{ searchAction: (term: string) => void }> {
  render() {
    return (
      <>
        <div className="nav">
          <div className="nav__logo">
            <Logo></Logo>
          </div>
          <div className="nav__search">
            <Search
              placeholder="Search by title"
              searchAction={this.props.searchAction}
            ></Search>
            <ThrowError></ThrowError>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
