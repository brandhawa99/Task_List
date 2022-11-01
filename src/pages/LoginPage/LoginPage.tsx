import React, { FC } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => (
  <div className={styles.LoginPage} data-testid="LoginPage">
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;
