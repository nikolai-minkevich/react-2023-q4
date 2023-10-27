import React from 'react';
import './Nav.css';
import Search from '../Search';

type NavProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class Navbar extends React.Component<NavProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <>
        <div className="nav">
          <div className="nav__logo">Logo</div>
          <div className="nav__search">
            <Search message="Search"></Search>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
