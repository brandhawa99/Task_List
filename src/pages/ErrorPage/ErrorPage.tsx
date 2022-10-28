import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const error: any = useRouteError();
  console.error(error);
  return (

    <div className={styles.ErrorPage} data-testid="ErrorPage">
    <h1>Opps!</h1>
    <p>Sorry, an unexpected error has occured.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
  }

export default ErrorPage;
