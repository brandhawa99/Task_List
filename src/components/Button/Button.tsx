import React, { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {title:string, primary?:true}

const Button: FC<ButtonProps> = ({title,primary}) => {
  return primary? 
    (<div className={styles.Button} data-testid="Button">{title}</div>):
    (<div className={styles.Secondary} data-testid="Button">{title}</div>)

}

export default Button;
