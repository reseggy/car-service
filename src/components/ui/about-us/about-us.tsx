import { TAboutUsProps } from './types';
import { FC } from 'react';
import styles from './about-us.module.css';
import aboutUsCar from '../../../assets/aboutUsCar.png';
import advantageProfService from '../../../assets/advantageProfService.svg';
import { Advantage } from '../../advantage';
import advantageFastRepairs from '../../../assets/advantageFastRepairs.svg';
import advantageQuality from '../../../assets/advantageQuality.svg';
import advantageApproach from '../../../assets/advantageApproach.svg';

export const AboutUsUI: FC<TAboutUsProps> = () => {
  return (
    <section className={styles.section}>
      <div className={styles.mainSection}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>About Us</h2>
          <img src={aboutUsCar} alt='car' className={styles.carImg} />
        </div>
        <p className={styles.mainSectionText}>
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
          imgSrc={advantageProfService}
          imgAlt='icon professional services'
        />
        <Advantage
          title='Fast repairs'
          text="We value your time and offer prompt solutions to your vehicle's problems, minimizing downtime."
          imgSrc={advantageFastRepairs}
          imgAlt='icon fast repairs'
        />
        <Advantage
          title='Guaranteed quality'
          text='We use only top-quality parts and materials, ensuring long-term reliability of your vehicle.'
          imgSrc={advantageQuality}
          imgAlt='icon guaranteed quality'
        />
        <Advantage
          title='Customer-oriented approach'
          text='We strive for complete customer satisfaction by providing personalized service and support.'
          imgSrc={advantageApproach}
          imgAlt='icon customer-oriented approach'
        />
      </div>
    </section>
  );
};
