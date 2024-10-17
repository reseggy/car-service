import { FC } from 'react';
import { TSaleCarsCarouselProps } from './types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarForSale } from '../../car-for-sale';
import styles from './sale-cars-carousel.module.css';

export const SaleCarsCarouselUI: FC<TSaleCarsCarouselProps> = ({
  items,
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

  return (
    <section className={styles.saleCarsSection}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>Sale Cars</h2>
        <p className={styles.text}>200 offers</p>
      </div>
      <Slider {...settings} className={styles.carouselContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <CarForSale
              title={item.title}
              price={item.price}
              mileage={item.mileage}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
