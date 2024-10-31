import { FC } from 'react';
import styles from './app-header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '@assets/svg/logo.svg';
import phoneIcon from '@assets/svg/phone.svg';
import { TAppHeaderUIProps } from './types';
import { Dropdown } from '../../dropdown';
import { dropdownServices, dropdownLanguage } from '../../../mock';

export const AppHeaderUI: FC<TAppHeaderUIProps> = () => {
  const navigate = useNavigate();

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
      </nav>

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
        <button
          aria-label='Contact us'
          className={`${styles.headerText} ${styles.button} ${styles.contactButton}`}
          onClick={() => {
            navigate('/contacts');
          }}
        >
          Contact us
        </button>
      </div>
    </header>
  );
};
