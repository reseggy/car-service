import { FC } from 'react';
import { TSaleCarsProps } from './types.ts';
import styles from './sale-cars.module.css';
import { CarForSale } from '../../car-for-sale/car-for-sale.tsx';

export const SaleCarsUI: FC<TSaleCarsProps> = ({ items }) => {
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
