import styles from './welcome-component.module.css';
import { FC } from 'react';
import logo from '@assets/svg/logoWOtext.svg';
import arrow from '@assets/svg/arrow2.svg';
import { useNavigate } from 'react-router-dom';

export const WelcomeComponentUI: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.home_page}>
      <div className={styles.title}>
        <h1 className={`${styles.text} ${styles.title_main}`}>
          <span className={styles.title_main_word}>Quality</span> car service
          <img src={logo} alt='Logo' className={styles.logo} />
        </h1>
        <div className={styles.catalog}>
          <p className={`${styles.text} ${styles.subtitle}`}>
            Our top priority is to provide our customers with the best service
            at an affordable price. Entrust your transportation to professionals
            and enjoy flawless operation of your car!
          </p>
          <button
            aria-label='To catalog'
            className={`${styles.text} ${styles.button_catalog}`}
            onClick={() => {
              navigate('/sale-cars');
            }}
          >
            To catalog
            <img src={arrow} alt='arrow icon' />
          </button>
        </div>
      </div>
    </section>
  );
};
