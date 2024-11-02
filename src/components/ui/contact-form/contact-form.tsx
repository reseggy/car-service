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
          <div className={styles.map}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.7813288440107!2d14.45352627979507!3d50.14652247940511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470beb0963fc02ef%3A0x6b7e2c28c7c0559c!2zU3BvxZlpY2vDoSAzNywgMTg0IDAwIFByYWhhLURvbG7DrSBDaGFicnksINCn0LXRhdC40Y8!5e0!3m2!1sru!2sru!4v1730573236660!5m2!1sru!2sru'
              loading='lazy'
              className={styles.mapIframe}
            ></iframe>
          </div>
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
