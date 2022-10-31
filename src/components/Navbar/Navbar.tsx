import React, { FC } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button'
import {Link} from 'react-router-dom'
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const linkStyle = {
    textDecoration:"none",
    color:"black",
  }
  return(
    <nav className={styles.Navbar} data-testid="Navbar">
      <h1 className={styles.heading}>
      <Link style={linkStyle}to='/'>
        Scribble Notes
      </Link>
      </h1>
      <ul className='row'>
        <li>
            <Button link='/login' title="Login" primary={true} />
        </li>
        <li>
          <Button link='/signup' title="Sign Up" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
