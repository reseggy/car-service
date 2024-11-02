import { FC } from 'react';
import styles from './contact-form.module.css';
import { Form } from '../../form';
import phoneIcon from '@assets/svg/phone.svg';
import adressIcon from '@assets/svg/address.svg';

export const ContactFormUI: FC = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact form</h2>
      <div className={styles.contactContent}>
        <div className={styles.address}>
          <div className={styles.map}></div>
          {/* TODO Вставить компонент карты рабочей!!! */}
          <div className={styles.contactContainer}>
            <address className={styles.contacts}>
              {['+42060134332', '+220601343321'].map((phone, index) => (
                <div key={index} className={styles.contactItem}>
                  <img src={phoneIcon} alt='phone icon' />
                  <a
                    href={`tel:${phone}`}
                    className={`${styles.text} ${styles.contactPhoneText}`}
                  >
                    {phone}
                  </a>
                </div>
              ))}
              <div className={`${styles.contactItem}`}>
                <img src={adressIcon} alt='adress icon' />
                <p className={`${styles.text}`}>
                  Spořická 37, 184 00 Praha-Dolní Chabry
                </p>
              </div>
            </address>
          </div>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </section>
  );
};
