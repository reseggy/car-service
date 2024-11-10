import { FC } from 'react';
import styles from './app-header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '@assets/svg/logo.svg';
import phoneIcon from '@assets/svg/phone.svg';
import { TAppHeaderUIProps } from './types';
import { Dropdown } from '../../dropdown';
import { dropdownServices, dropdownLanguage } from '../../../mock';
import { BurgerMenu } from '../../burger-menu';

export const AppHeaderUI: FC<TAppHeaderUIProps> = () => {
  function getClassName(isActive: boolean) {
    return isActive
      ? `${styles.headerText} ${styles.navLink} ${styles.navLinkActive}`
      : `${styles.headerText} ${styles.navLink}`;
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to='/'>
          <img src={logo} alt='Logo' />
        </NavLink>
      </div>
      <nav className={styles.navContainer}>
        <div className={styles.navMenu}>
          <Dropdown items={dropdownServices} />
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
        <div className={styles.settings}>
          <Dropdown items={dropdownLanguage} mode='language' />
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
        </div>
      </nav>
      <BurgerMenu />
    </header>
  );
};
