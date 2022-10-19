import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {title:string, primary?:true}

const Button: FC<ButtonProps> = ({title,primary}) => {
  return primary? 
    (<a className={styles.Button} data-testid="Button">{title}</a>):
    (<a className={styles.Secondary} data-testid="Button">{title}</a>)

}

export default Button;
