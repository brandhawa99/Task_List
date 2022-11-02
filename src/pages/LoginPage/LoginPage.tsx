import React, { FC } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import FormSwitch from '../../components/FormSwitch/FormSwitch';
import LoginWithProvider from '../../components/LoginWithProvider/LoginWithProvider';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => (
  <div className={styles.LoginPage} data-testid="LoginPage">
    <h1>Login</h1>
    <div className={styles.LoginComponents}>
      <LoginForm />
      <FormSwitch link={'/signup'} title={'Switch To Sign Up'} />
      <LoginWithProvider />
    </div>
  </div>
);

export default LoginPage;
