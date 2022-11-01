import React, { FC } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => (
  <div className={styles.LoginForm} data-testid="LoginForm">
    <form className={styles.Form}>
      <div className={styles.formElement}>
        <label htmlFor='username'>Username</label>
        <input type="text" className={styles.Input} required name="username" placeholder="username" />
      </div>
      <div className={styles.formElement}>
        <label htmlFor='password'>Password</label>
        <input type="password" className={styles.Input} required name="password" placeholder="password" />
      </div>
      <div className={styles.buttonContainer}>
        <button>Login</button>
      </div>
    </form>
  </div>
);

export default LoginForm;
