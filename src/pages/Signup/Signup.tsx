import React, { FC } from 'react';
import styles from './Signup.module.css';
import SignupForm from '../../components/SignupForm/SignupForm';
interface LoginProps {}

const Signup: FC<LoginProps> = () => (
  <div className={styles.Login} data-testid="Login">
      <h1>Sign Up</h1>
      <SignupForm />
  </div>
);

export default Signup;
