import { FC } from 'react';
import styles from './app-header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import phoneIcon from '../../../assets/phone.svg';
import arrowIcon from '../../../assets/arrow.svg';
import { TAppHeaderUIProps } from './types';

export const AppHeaderUI: FC<TAppHeaderUIProps> = () => {
  function getClassName(isActive: boolean) {
    return isActive ? `${styles.link} ${styles.link_active}` : styles.link;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <img src={logo} alt='Logo' />
          </NavLink>
        </div>
        <div className={styles.nav_menu}>
          <NavLink to='/services' className={({ isActive }) => getClassName(isActive)}>
            Services<img src={arrowIcon} alt="arrow icon" />
          </NavLink>
          <NavLink to='/contacts' className={({ isActive }) => getClassName(isActive)}>
            Contact
          </NavLink>
          <NavLink to='/sale-cars' className={({ isActive }) => getClassName(isActive)}>
            Sale cars
          </NavLink>
        </div>
      </nav>

      <div className={styles.settings}>
        <button className={`${styles.language} ${styles.button}`}>ENG<img className={styles.arrow} src={arrowIcon} alt="arrow icon" /></button>
        <button className={`${styles.phone} ${styles.button}`}><img src={phoneIcon} alt="phone icon" />+420 601343321</button>
        <button className={`${styles.contact} ${styles.button}`}>Contact us</button>
      </div>
    </header>
  );
};
