import { FC } from 'react';
import styles from './our-services.module.css';
import { ServiceListElement } from '../../service-list-element';
import serviceBrake from '../../../assets/serviceBrake.png';
import serviceEngine from '../../../assets/serviceEngine.png';
import serviceOil from '../../../assets/serviceOil.png';
import serviceWheel from '../../../assets/serviceWheel.png';

export const OurServicesUI: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our services</h2>
      <ul className={styles.list}>
        <ServiceListElement
          title='Brake system repair'
          text='From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.'
          imgSrc={serviceBrake}
          imgAlt='brake system repair'
        />
        <ServiceListElement
          title='Engine repair'
          text='We keep a close eye on the condition of your engine, offering services that will reduce the likelihood of future engine replacement.'
          imgSrc={serviceEngine}
          imgAlt='Engine repair'
        />
        <ServiceListElement
          title='Oil change'
          text='Regular oil and filter changes are one of the most effective and affordable ways to protect your vehicle.'
          imgSrc={serviceOil}
          imgAlt='Oil change'
        />
        <ServiceListElement
          title='Wheel replacement'
          text='We perform a wide range of wheel replacement services, including emergency tire replacement in the event of a breakdown on the road.'
          imgSrc={serviceWheel}
          imgAlt='Wheel replacement'
        />
      </ul>
    </section>
  );
};
