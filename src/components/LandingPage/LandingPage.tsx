import React, { FC } from 'react';
import styles from './LandingPage.module.css';
import hero from '../../images/homepage.svg'
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div className={styles.LandingPage} data-testid="LandingPage">
    <section>
      <article>
        <h1>Who are we?</h1>
        <img src={hero}></img>
      </article>
    </section>
  </div>
);

export default LandingPage;
