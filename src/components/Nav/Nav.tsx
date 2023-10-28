import React from 'react';
import './Nav.css';
import Search from '../Search';
import Logo from '../Logo';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="nav">
          <div className="nav__logo">
            <Logo></Logo>
          </div>
          <div className="nav__search">
            <Search message="Search"></Search>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
