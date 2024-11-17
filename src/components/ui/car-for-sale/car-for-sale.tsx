import { FC, memo } from 'react';
import { createPortal } from 'react-dom';
import styles from './car-for-sale.module.css';
import separator from '@assets/svg/separator.svg';
import { CarForSaleModal } from '../../car-for-sale-modal';
import { TCarForSaleProps } from './types';

export const CarForSaleUI: FC<TCarForSaleProps> = memo(
  ({ car, onClick, onClose, isModalOpen }) => {
    return (
      <div className={styles.item} onClick={onClick}>
        <button className={styles.button}>
          <img
            src={car.imgSrc}
            alt={car.imgAlt}
            className={styles.itemImg}
            loading='lazy'
          />
          <div className={styles.itemAllText}>
            <h3 className={styles.title}>{car.title}</h3>
            <div className={styles.itemText}>
              <p className={styles.price}>${car.price}</p>
              <img src={separator} alt='separator' />
              <p className={styles.mileageText}>{car.mileage} km</p>
            </div>
          </div>
        </button>
        {isModalOpen &&
          createPortal(
            <CarForSaleModal car={car} onClose={onClose} />,
            document.body
          )}
      </div>
    );
  }
);
