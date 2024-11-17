import { FC, memo } from 'react';
import { TAboutServicesOffersUIProps } from './types';
import styles from './about-services-offers.module.css';
import { AboutServicesOffer } from '../../about-services-offer';

export const AboutServicesOffersUI: FC<TAboutServicesOffersUIProps> = memo(
  ({ offers }) => {
    return (
      <section className={styles.section}>
        <h3 className={styles.title}>
          What services <span className={styles.mainWords}>we offer</span>
        </h3>
        <div className={styles.offers}>
          {offers.map((offer, index) => (
            <AboutServicesOffer
              key={index}
              text={offer.text}
              counter={`0${index + 1}`}
            />
          ))}
        </div>
        <p className={styles.text}>
          With our body work, you not only get bodywork restoration, but also
          confidence in quality and expertise. Whether it’s minor scuffs or
          serious accident damage, our work will leave your vehicle in optimal
          condition and aesthetically perfect appearance. Give your car the best
          care – put it in the hands of our body shop team. Your satisfaction is
          our calling card.
        </p>
      </section>
    );
  }
);
