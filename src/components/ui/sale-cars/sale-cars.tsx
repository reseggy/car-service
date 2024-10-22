import { FC } from 'react';
import { TSaleCarsProps } from './types.ts';
import styles from './sale-cars.module.css';
import { CarForSale } from '../../car-for-sale/car-for-sale.tsx';

export const SaleCarsUI: FC<TSaleCarsProps> = ({ items }) => {
  return (
    <section className={styles.section}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>Sale Cars</h2>
        <p className={styles.text}>200 offers</p>
      </div>
      <div className={styles.listCars}>
        {items.map((item, index) => (
          <div className={styles.listCar}>
            <CarForSale
              key={index}
              title={item.title}
              price={item.price}
              mileage={item.mileage}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
