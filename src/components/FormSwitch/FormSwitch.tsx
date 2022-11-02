import React, { FC } from 'react';
import styles from './FormSwitch.module.css';
import {Link} from 'react-router-dom'

interface FormSwitchProps {title:string, link:string}

const FormSwitch: FC<FormSwitchProps> = ({title, link}) => (
  <div className={styles.FormSwitch} data-testid="FormSwitch">
    <hr className={styles.bar}/>
    <Link className={styles.link} to={link}>{title}</Link>
    <hr className={styles.bar} />
  </div>
);

export default FormSwitch;
