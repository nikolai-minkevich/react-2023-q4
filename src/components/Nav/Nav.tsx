import './Nav.css';
import Search from '../Search';
import Logo from '../Logo';
import ThrowError from '../ThrowError';
import { FC } from 'react';

const Navbar: FC = () => (
  <>
    <div className="nav">
      <div className="nav__logo">
        <Logo></Logo>
      </div>
      <div className="nav__search">
        <Search></Search>
        <ThrowError></ThrowError>
      </div>
    </div>
  </>
);

export default Navbar;
