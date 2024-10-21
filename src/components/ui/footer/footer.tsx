import { FC } from 'react';
import styles from './footer.module.css';
import phoneIcon from '../../../assets/phone.svg';
import adressIcon from '../../../assets/address.svg';
import facebookIcon from '../../../assets/facebook.svg';
import XIcon from '../../../assets/xIcon.svg';

export const FooterUI: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.contactContainer}>
          <h5 className={styles.title}>Contact</h5>
          <address className={styles.contacts}>
            <div className={`${styles.contactItem} ${styles.contactPhone}`}>
              <img
                src={phoneIcon}
                alt='phone icon'
                className={styles.contactPhoneIcon}
              />
              <a href='tel:+420601343321' className={styles.contactPhoneText}>
                +420601343321
              </a>
            </div>
            <div className={`${styles.contactItem} ${styles.contactPhone}`}>
              <img
                src={phoneIcon}
                alt='phone icon'
                className={styles.contactPhoneIcon}
              />
              <a href='tel:+220601343321' className={styles.contactPhoneText}>
                +220601343321
              </a>
            </div>
            <div className={`${styles.contactItem} ${styles.contactAdress}`}>
              <img
                src={adressIcon}
                alt='adress icon'
                className={styles.contactAdressIcon}
              />
              <p className={styles.contactAdressText}>
                Spořická 37, 184 00 Praha-Dolní Chabry
              </p>
            </div>
          </address>
          <div className={styles.contactButtons}>
            <button
              className={`${styles.contactButton} ${styles.contactSmallButton}`}
            >
              <img
                src={facebookIcon}
                alt='Facebook icon'
                className={styles.contactSmallButtonIcon}
              />
            </button>
            <button
              className={`${styles.contactButton} ${styles.contactSmallButton}`}
            >
              <img
                src={XIcon}
                alt='X icon'
                className={styles.contactSmallButtonIcon}
              />
            </button>
            <button
              className={`${styles.contactButton} ${styles.contactBigButton}`}
            >
              Contact us
            </button>
          </div>
        </div>
        <div className={styles.hoursContainer}>
          <h5 className={styles.title}>Opening hours</h5>
          <div className={styles.table}>
            <div className={styles.tableElement}>
              <p
                className={`${styles.tableText} ${`${styles.tableText} ${styles.tableDay}`}`}
              >
                Mo
              </p>
              <p
                className={`${styles.tableText} ${`${styles.tableText} ${styles.tableTime}`}`}
              >
                7:30 - 18:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>Tu</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                7:30 - 18:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>We</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                7:30 - 18:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>Th</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                7:30 - 18:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>Fr</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                7:30 - 18:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>Sa</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                8:00 - 13:00
              </p>
            </div>
            <div className={styles.tableElement}>
              <p className={`${styles.tableText} ${styles.tableDay}`}>Su</p>
              <p className={`${styles.tableText} ${styles.tableTime}`}>
                ZAVŘENO
              </p>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <h5 className={styles.title}>Services</h5>
          <div className={styles.serviceOffers}>
            <a href='#' className={styles.serviceOffer}>
              Bodywork parts
            </a>
            <a href='#' className={styles.serviceOffer}>
              Stk and transcription of vehicles
            </a>
            <a href='#' className={styles.serviceOffer}>
              Ceramics
            </a>
            <a href='#' className={styles.serviceOffer}>
              Vehicle washing and interior cleaning
            </a>
            <a href='#' className={styles.serviceOffer}>
              3D Geometry
            </a>
          </div>
        </div>
      </div>
      <div className={styles.postFooter}>
        <p className={styles.copyright}>© 2006-2024 33AutoPulse s.r.o.</p>
        <div className={styles.postFooterLinks}>
          <a href='#' className={styles.postFooterLink}>
            Privacy policy
          </a>
          <a href='#' className={styles.postFooterLink}>
            Legal notice
          </a>
          <a href='#' className={styles.postFooterLink}>
            Cookie
          </a>
          <a href='#' className={styles.postFooterLink}>
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};
