import React, { FC } from 'react';
import styles from './Signup.module.css';
import SignupForm from '../../components/SignupForm/SignupForm';
import FormSwitch from '../../components/FormSwitch/FormSwitch';
import LoginWithProvider from '../../components/LoginWithProvider/LoginWithProvider';
interface LoginProps {}

const Signup: FC<LoginProps> = () => (
  <div className={styles.Login} data-testid="Login">
      <h1>Sign Up</h1>
      <div className={styles.LoginComponents}>
        <SignupForm />
        <FormSwitch title='Switch To Login' link='/login'/>
        <LoginWithProvider />
      </div>
  </div>
);

export default Signup;
