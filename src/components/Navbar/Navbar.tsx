import React, { FC } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button'
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <nav className={styles.Navbar} data-testid="Navbar">
    <h1 className={styles.heading}>Scribble Notes</h1>
    <ul className='row'>
      <li>
          <Button link='/login' title="Login" primary={true} />
      </li>
      <li>
        <Button link='/login' title="Sign Up" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
