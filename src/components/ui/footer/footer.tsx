import { FC } from 'react';
import styles from './footer.module.css';
import phoneIcon from '@assets/svg/phone.svg';
import adressIcon from '@assets/svg/address.svg';
import facebookIcon from '@assets/svg/facebook.svg';
import XIcon from '@assets/svg/xIcon.svg';
import { TFooterProps } from './types';
import { useNavigate, NavLink } from 'react-router-dom';

export const FooterUI: FC<TFooterProps> = ({
  postFooterLinks,
  servicesLinks
}) => {
  const navigate = useNavigate();

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
                onClick={() => {
                  window.open('https://rkn.gov.ru/', '_blank');
                }}
              >
                <img src={icon} alt='icon' />
              </button>
            ))}
            <button
              className={`${styles.contactButton} ${styles.footerText} ${styles.contactBigButton}`}
              onClick={() => {
                navigate('/contacts');
              }}
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
            {servicesLinks.map((serviceText, index) => (
              <NavLink
                to='/about-services'
                key={index}
                className={`${styles.footerText} ${styles.serviceOffer}`}
              >
                {serviceText}
              </NavLink>
            ))}
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
              <NavLink
                key={index}
                to={linkTarget}
                className={`${styles.footerText} ${styles.postFooterLink}`}
              >
                {LinkText}
              </NavLink>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
