import { FC, useState } from 'react';
import styles from './car-for-sale.module.css';
import separator from '@assets/svg/separator.svg';
import { CarForSaleModal } from '../../car-for-sale-modal';
import { TCarForSaleProps } from './types';

export const CarForSaleUI: FC<TCarForSaleProps> = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <button className={styles.button}>
        <img src={car.imgSrc} alt={car.imgAlt} className={styles.itemImg} />
        <div className={styles.itemAllText}>
          <h3 className={styles.title}>{car.title}</h3>
          <div className={styles.itemText}>
            <p className={styles.price}>${car.price}</p>
            <img src={separator} alt='separator' />
            <p className={styles.mileageText}>{car.mileage} km</p>
          </div>
        </div>
      </button>
      {isModalOpen && <CarForSaleModal car={car} onClose={onClose} />}
    </div>
  );
};
