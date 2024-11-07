import { FC } from 'react';
import { Advantage } from '../../advantage';
import styles from './about-us.module.css';
import aboutUsCar from '@assets/photos/aboutUsCar.png';

import { AboutUsUIProps } from './types';

export const AboutUsUI: FC<AboutUsUIProps> = ({ advantages }) => {
  return (
    <section className={styles.section}>
      <div className={styles.mainSection}>
        <div className={styles.titleSection}>
          <h2 className={`${styles.text} ${styles.title}`}>About Us</h2>
          <img src={aboutUsCar} alt='car' className={styles.carImg} />
        </div>
        <p className={`${styles.text} ${styles.mainSectionText}`}>
          We are your reliable partner in car maintenance in the Czech Republic.
          We specialize in quality maintenance, repair and replacement of spare
          parts for all makes and models. Our experienced craftsmen will provide
          your vehicle with a high level of care, and our competitive prices and
          attentive attitude to customers will make your service pleasant and
          carefree.
        </p>
      </div>
      <div className={styles.subsection}>
        {advantages.map((advantage, index) => (
          <Advantage
            key={index}
            title={advantage.title}
            text={advantage.text}
            imgSrc={advantage.imgSrc}
            imgAlt={advantage.imgAlt}
          />
        ))}
      </div>
    </section>
  );
};
