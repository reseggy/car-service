import { FC, useRef, useEffect } from 'react';
import styles from './dropdown-ui.module.css';
import { IDropdownProps } from './types';
import arrowIcon from '@assets/svg/arrow.svg';

export const DropdownUI: FC<IDropdownProps> = ({
  items,
  handleToggle,
  handleSelect,
  isOpen,
  setIsOpen,
  currentItem,
  mode
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${isOpen ? styles.dropdown : styles.dropdown}`}
      ref={dropdownRef}
    >
      <button
        className={`${styles.text} ${`${isOpen ? `${styles.dropdownToggle} ${styles.dropdownToggleOpen} ${mode === 'language' ? styles.dropdownToggleLanguageOpen : ''}` : styles.dropdownToggle}`} ${`${mode === 'language' ? styles.dropdownToggleLanguage : ''}`}`}
        onClick={handleToggle}
      >
        {currentItem
          ? currentItem?.text
          : `${mode === 'language' ? 'ENG' : 'Services'}`}
        <img
          src={arrowIcon}
          alt='arrow icon'
          className={`${isOpen ? `${styles.arrowIconOpen} ${styles.arrowIcon}` : styles.arrowIcon}`}
        />
      </button>
      {isOpen && (
        <ul
          className={`${mode === 'language' ? `${styles.dropdownMenu} ${styles.dropdownMenuLanguage}` : styles.dropdownMenu}`}
        >
          {items.map((item) => (
            <li
              key={item.id}
              className={`${styles.text} ${`${mode === 'language' ? `${styles.dropdownItem} ${styles.dropdownItemLanguage}` : styles.dropdownItem}`}`}
              onClick={() => handleSelect(item)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
