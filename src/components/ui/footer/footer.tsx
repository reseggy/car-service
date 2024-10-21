import { FC } from 'react';
import styles from './footer.module.css';
import phoneIcon from '../../../assets/phone.svg';
import adressIcon from '../../../assets/address.svg';
import facebookIcon from '../../../assets/facebook.svg';
import XIcon from '../../../assets/xIcon.svg';

export const FooterUI: FC = () => {
  const postFooterLinks = {
    'Privacy policy': '#',
    'Legal notice': '#',
    Cookie: '#',
    Sitemap: '#'
  };

  const servicesLinks = {
    'Bodywork parts': '#',
    'Stk and transcription of vehicles': '#',
    Ceramics: '#',
    'Vehicle washing and interior cleaning': '#',
    '3D Geometry': '#'
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.contactContainer}>
          <h5 className={`${styles.footerText} ${styles.title}`}>Contact</h5>
          <address className={styles.contacts}>
            {['+42060134332', '+220601343321'].map((phone, index) => (
              <div key={index} className={styles.contactItem}>
                <img src={phoneIcon} alt='phone icon' />
                <a
                  href={`tel:${phone}`}
                  className={`${styles.footerText} ${styles.contactPhoneText}`}
                >
                  {phone}
                </a>
              </div>
            ))}
            <div className={`${styles.contactItem} ${styles.contactAdress}`}>
              <img
                src={adressIcon}
                alt='adress icon'
                className={styles.contactAdressIcon}
              />
              <p className={`${styles.footerText} ${styles.contactAdressText}`}>
                Spořická 37, 184 00 Praha-Dolní Chabry
              </p>
            </div>
          </address>
          <div className={styles.contactButtons}>
            {[facebookIcon, XIcon].map((icon, index) => (
              <button
                key={index}
                className={`${styles.contactButton} ${styles.contactSmallButton}`}
              >
                <img src={icon} alt='icon' />
              </button>
            ))}
            <button
              className={`${styles.contactButton} ${styles.footerText} ${styles.contactBigButton}`}
            >
              Contact us
            </button>
          </div>
        </div>
        <div className={styles.hoursContainer}>
          <h5 className={`${styles.footerText} ${styles.title}`}>
            Opening hours
          </h5>
          <div className={styles.table}>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, index) => (
              <div key={index} className={styles.tableElement}>
                <p className={`${styles.footerText}`}>{day}</p>
                <p className={`${styles.footerText}`}>
                  {index < 5
                    ? '7:30 - 18:00'
                    : index === 5
                      ? '8:00 - 13:00'
                      : 'ZAVŘENO'}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.services}>
          <h5 className={`${styles.footerText} ${styles.title}`}>Services</h5>
          <div className={styles.serviceOffers}>
            {Object.entries(servicesLinks).map(
              ([serviceText, serviceTarget], index) => (
                <a
                  key={index}
                  href={serviceTarget}
                  className={`${styles.footerText} ${styles.serviceOffer}`}
                >
                  {serviceText}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.postFooter}>
        <p className={`${styles.footerText} ${styles.copyright}`}>
          © 2006-2024 33AutoPulse s.r.o.
        </p>
        <div className={styles.postFooterLinks}>
          {Object.entries(postFooterLinks).map(
            ([LinkText, linkTarget], index) => (
              <a
                key={index}
                href={linkTarget}
                className={`${styles.footerText} ${styles.postFooterLink}`}
              >
                {LinkText}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
