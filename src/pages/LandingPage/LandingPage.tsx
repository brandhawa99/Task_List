import React, { FC } from 'react';
import styles from './LandingPage.module.css';
import hero from '../../images/homepage.svg'
import Button from '../../components/Button/Button'
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div className={styles.LandingPage} data-testid="LandingPage">
    <section>
      <article className={styles.hero}>
        <img src={hero} alt='hero character'></img>
        <div className={styles.heroText}>
          <h1>Welcome to Scribble&nbsp;Notes</h1>
          <p>
            This is the best place to track what you have to do. Just Scribble it down, and now you have it saved in one spot for later.
          </p>
          <div>
            <Button link='/signup' title='Click Here To Sign Up' />
          </div>

        </div>
      </article>
    </section>
  </div>
);

export default LandingPage;
