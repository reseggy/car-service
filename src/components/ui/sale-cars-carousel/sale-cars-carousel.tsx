import { FC } from 'react';
import { TSaleCarsCarouselProps } from './types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarForSale } from '../../car-for-sale';
import styles from './sale-cars-carousel.module.css';
import { Preloader } from '../preloader';

export const SaleCarsCarouselUI: FC<TSaleCarsCarouselProps> = ({
  cars,
  isLoading,
  settingsAdditional
}) => {
  const settings = {
    ...settingsAdditional,
    appendDots: (dots: React.ReactNode) => (
      <div className={styles.dotsContainer}>
        <ul className={styles.dotsList}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className={styles.dot}></div>
  };

  if (isLoading || !cars) {
    return (
      <section className={styles.saleCarsSection}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.title}>Sale Cars</h2>
        </div>
        <Preloader />
      </section>
    );
  }

  return (
    <section className={styles.saleCarsSection}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>Sale Cars</h2>
        <p className={styles.text}>{cars.length} offers</p>
      </div>
      <Slider {...settings} className={styles.carouselContainer}>
        {cars.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <CarForSale {...item} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
