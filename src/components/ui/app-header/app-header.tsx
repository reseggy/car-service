import { FC } from 'react';
import styles from './app-header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import phoneIcon from '../../../assets/phone.svg';
import arrowIcon from '../../../assets/arrow.svg';
import { TAppHeaderUIProps } from './types';

export const AppHeaderUI: FC<TAppHeaderUIProps> = () => {
  function getClassName(isActive: boolean) {
    return isActive
      ? `${styles.headerText} ${styles.navLink} ${styles.navLinkActive}`
      : `${styles.headerText} ${styles.navLink}`;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <img src={logo} alt='Logo' />
          </NavLink>
        </div>
        <div className={styles.navMenu}>
          <NavLink
            to='/services'
            className={({ isActive }) => getClassName(isActive)}
          >
            Services
            <img
              src={arrowIcon}
              alt='arrow icon'
              className={styles.arrowIcon}
            />
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) => getClassName(isActive)}
          >
            Contact
          </NavLink>
          <NavLink
            to='/sale-cars'
            className={({ isActive }) => getClassName(isActive)}
          >
            Sale cars
          </NavLink>
        </div>
      </nav>

      <div className={styles.settings}>
        <button
          aria-label='Select language'
          className={`${styles.headerText} ${styles.button} ${styles.languageButton}`} //TODO Реализовать полноценное переключение языка
        >
          ENG
          <img className={styles.arrowIcon} src={arrowIcon} alt='arrow icon' />
        </button>
        <button
          className={`${styles.headerText} ${styles.button} ${styles.phoneButton}`}
        >
          <img src={phoneIcon} alt='phone icon' />
          <a
            className={`${styles.headerText} ${styles.phoneLink}`}
            href='tel:420601343321'
          >
            +420 601343321
          </a>
        </button>
        <button
          aria-label='Contact us'
          className={`${styles.headerText} ${styles.button} ${styles.contactButton}`}
        >
          Contact us
        </button>
      </div>
    </header>
  );
};
