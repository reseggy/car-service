import { FC } from 'react';
import styles from './about-services-description.module.css';
import carRepair from '@assets/photos/car-repair.png';

export const AboutServicesDescriptionUI: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.description}>
        <h2 className={`${styles.text} ${styles.title}`}>
          <span className={styles.titleMainWord}>Complete</span> service for all
          makes of cars
        </h2>
        <p className={`${styles.text} ${styles.subtitle}`}>
          Our car service provides full service for cars of all brands with an
          emphasis on professional care and customer satisfaction. With modern
          equipment and skilled professionals, we ensure optimal functionality
          and safety of your vehicle.
        </p>
      </div>
      <img className={styles.image} src={carRepair} alt='Car service' />
    </section>
  );
};
