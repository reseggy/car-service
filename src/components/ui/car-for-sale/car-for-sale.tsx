import { TCarForSaleProps } from './types';
import { FC } from 'react';
import styles from './car-for-sale.module.css';
import separator from '../../../assets/separator.svg';

export const CarForSaleUI: FC<TCarForSaleProps> = ({
  title,
  price,
  mileage,
  imgSrc,
  imgAlt
}) => {
  return (
    <li className={styles.item}>
      {/* РЕАЛИЗОВАТЬ ПРИ КЛИКЕ НА КНОПКУ ОТКРЫТИЕ ОПРЕДЕЛЕННОЙ СТРАНИЦЫ
      ОПРЕДЕЛЕННОЙ ТАЧКИ */}
      <button className={styles.button}>
        <img src={imgSrc} alt={imgAlt} className={styles.itemImg} />
        <div className={styles.itemAllText}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.itemText}>
            <p className={styles.price}>${price}</p>
            <img src={separator} alt='separator' />
            <p className={styles.mileageText}>{mileage}</p>
          </div>
        </div>
      </button>
    </li>
  );
};
