import { TAboutUsProps } from './types';
import { FC } from 'react';
import { Advantage } from '../../advantage';
import styles from './about-us.module.css';
import aboutUsCar from '../../../assets/photos/aboutUsCar.png';

import gearIcon from '../../../assets/svg/gear.svg';
import engineIcon from '../../../assets/svg/engine.svg';
import wrenchIcon from '../../../assets/svg/wrench.svg';
import handshakeIcon from '../../../assets/svg/handshake.svg';

export const AboutUsUI: FC<TAboutUsProps> = () => {
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
        <Advantage
          title='Professional services'
          text='Our experienced craftsmen provide high quality service to your vehicle, solving any problems.'
          imgSrc={gearIcon}
          imgAlt='icon professional services'
        />
        <Advantage
          title='Fast repairs'
          text="We value your time and offer prompt solutions to your vehicle's problems, minimizing downtime."
          imgSrc={engineIcon}
          imgAlt='icon fast repairs'
        />
        <Advantage
          title='Guaranteed quality'
          text='We use only top-quality parts and materials, ensuring long-term reliability of your vehicle.'
          imgSrc={wrenchIcon}
          imgAlt='icon guaranteed quality'
        />
        <Advantage
          title='Customer-oriented approach'
          text='We strive for complete customer satisfaction by providing personalized service and support.'
          imgSrc={handshakeIcon}
          imgAlt='icon customer-oriented approach'
        />
      </div>
    </section>
  );
};
