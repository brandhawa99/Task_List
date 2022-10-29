import React, { FC } from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

interface ButtonProps {title:string, primary?:true, link:string}

const Button: FC<ButtonProps> = ({title,primary,link}) => {
  return primary? 
    (<Link to={link} className={`${styles.Button} ${styles.every}`} data-testid="Button">{title}</Link>):
    (<Link to={link} className={`${styles.Secondary} ${styles.every}`} data-testid="Button">{title}</Link>)

}

export default Button;
