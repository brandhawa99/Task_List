import React, { FC } from 'react';
import styles from './LoginPage.module.css';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => (
  <div className={styles.LoginPage} data-testid="LoginPage">
    LoginPage Component
  </div>
);

export default LoginPage;
