import { FC } from 'react';
import { AboutServicesOfferProps } from './types';
import styles from './about-services-offer.module.css';

export const AboutServicesOfferUI: FC<AboutServicesOfferProps> = (offer) => {
  return (
    <div className={styles.offer}>
      <div className={styles.counter}>
        <p className={styles.number}>{offer.counter}</p>
      </div>
      <p className={styles.text}>{offer.text}</p>
    </div>
  );
};
