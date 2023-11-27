import Search from '../Search';
import Logo from '../Logo';
import ThrowError from '../ThrowError';
import { FC } from 'react';

import styles from './Nav.module.css';

const Navbar: FC = () => (
  <>
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Logo></Logo>
      </div>
      <div className={styles.nav__search}>
        <Search></Search>
        <ThrowError></ThrowError>
      </div>
    </div>
  </>
);

export default Navbar;
