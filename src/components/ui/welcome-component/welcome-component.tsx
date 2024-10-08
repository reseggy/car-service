import styles from './welcome-component.module.css';
import { FC } from 'react';
import logo from '../../../assets/logoWOtext.svg';
import arrow from '../../../assets/arrow2.svg';

export const WelcomeComponentUI: FC = () => {
  return (
    <section className={styles.home_page}>
      <div className={styles.title}>
        <h1 className={styles.title_main}>
          <span className={styles.title_main_word}>Quality</span> car service
          <img src={logo} alt='Logo' className={styles.logo} />
        </h1>
        <div className={styles.catalog}>
          <p className={styles.subtitle}>
          Our top priority is to provide our customers with the best service at an affordable price. Entrust your transportation to professionals and enjoy flawless operation of your car!
          </p>
          <button className={styles.button_catalog}>
            To catalog
            <img src={arrow} alt='arrow' />
          </button>
        </div>
      </div>
    </section>
  );
};
