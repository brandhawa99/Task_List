import React, { FC } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button'
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <h1 className={styles.heading}>Scribble Notes</h1>
    <div className='row'>
      <Button title="Login" primary={true} />
      <Button title="Sign Up" />
    </div>
  </div>
);

export default Navbar;
