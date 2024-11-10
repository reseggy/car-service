import { FC, useState, useEffect } from 'react';
import styles from './burger-menu.module.css';
import { Dropdown } from '../../dropdown';
import { dropdownServices, dropdownLanguage } from '../../../mock';
import { NavLink } from 'react-router-dom';
import phoneIcon from '@assets/svg/phone.svg';

export const BurgerMenuUI: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function getClassName(isActive: boolean) {
    return isActive
      ? `${styles.menuText} ${styles.navLink} ${styles.navLinkActive}`
      : `${styles.menuText} ${styles.navLink}`;
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.burgerMenuContainer}>
      <Dropdown items={dropdownLanguage} mode='language' />
      <div
        className={`${styles.burgerIcon} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.links}>
          <div className={styles.mainLinks}>
            <Dropdown items={dropdownServices} onLinkClick={handleLinkClick} />
            <NavLink
              to='/contacts'
              className={({ isActive }) => getClassName(isActive)}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
            <NavLink
              to='/sale-cars'
              className={({ isActive }) => getClassName(isActive)}
              onClick={handleLinkClick}
            >
              Sale cars
            </NavLink>
          </div>

          <div className={styles.contactLinks}>
            <button
              className={`${styles.menuText} ${styles.button} ${styles.phoneButton}`}
            >
              <img src={phoneIcon} alt='phone icon' />
              <a
                className={`${styles.menuText} ${styles.phoneLink}`}
                href='tel:420601343321'
              >
                +420 601343321
              </a>
            </button>
            <NavLink
              to='/contacts'
              className={`${styles.menuText} ${styles.button} ${styles.buttonContact}`}
              onClick={handleLinkClick}
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
