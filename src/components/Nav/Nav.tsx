import './Nav.css';
import Search from '../Search';
import Logo from '../Logo';
import ThrowError from '../ThrowError';
import { FC } from 'react';

type TNavbarProps = {
  setTerm: (term: string) => void;
};

const Navbar: FC<TNavbarProps> = ({
  setTerm,
}: TNavbarProps): React.JSX.Element => (
  <>
    <div className="nav">
      <div className="nav__logo">
        <Logo></Logo>
      </div>
      <div className="nav__search">
        <Search placeholder="Search by title" setTerm={setTerm}></Search>
        <ThrowError></ThrowError>
      </div>
    </div>
  </>
);

export default Navbar;
