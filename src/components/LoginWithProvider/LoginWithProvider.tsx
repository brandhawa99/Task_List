import React, { FC } from 'react';
import styles from './LoginWithProvider.module.css';

interface LoginWithProviderProps {}

const LoginWithProvider: FC<LoginWithProviderProps> = () => (
  <div className={styles.LoginWithProvider} data-testid="LoginWithProvider">
    {/*To be implemented*/}
    <button disabled className={styles.logoButton}><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google'/></button>
    <button disabled className={styles.logoButton}><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg' alt='facebook'/></button>
    <button disabled className={styles.logoButton}><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg' alt='GitHub'/></button>

  </div>
);

export default LoginWithProvider;
