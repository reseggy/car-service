import { FC } from 'react';
import { TSaleCarsProps } from './types.ts';
import styles from './sale-cars.module.css';
import { CarForSale } from '../../car-for-sale/car-for-sale.tsx';
import { Preloader } from '../preloader/preloader.tsx';

export const SaleCarsUI: FC<TSaleCarsProps> = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <section className={styles.section}>
        <Preloader />
      </section>
    );
  }

  if (!items || items.length === 0) {
    return (
      <section className={styles.section}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>Sale Cars</h2>
        </div>
        <p>Нет доступных автомобилей.</p>
      </section>
    );
  }
  return (
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>Sale Cars</h2>
        <p className={styles.text}>{items.length} offers</p>
      </div>
      <div className={styles.listCars}>
        {items.map((car, index) => (
          <div key={index} className={styles.listCar}>
            <CarForSale {...car} />
          </div>
        ))}
      </div>
    </section>
  );
};
