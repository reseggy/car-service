import { FC } from 'react';
import { WelcomeComponent } from '../../components/welcome-component';
import { AboutUs } from '../../components/about-us';
import styles from './home-page.module.css';
import { OurServices } from '../../components/our-services';
import { SaleCarsCarousel } from '../../components/sale-cars-carousel';
import carSaleGls from '../../assets/carSaleGls.png';
import carSaleGls2 from '../../assets/carSaleGls2.png';
import carSaleGls3 from '../../assets/carSaleGls3.png';
import carSaleGls4 from '../../assets/carSaleGls4.png';

const carItems = [
  {
    title: 'Mercedes GLS-Class 2018',
    price: '45,000',
    mileage: '12,444',
    imgSrc: carSaleGls,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '56,000',
    mileage: '116,180',
    imgSrc: carSaleGls2,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '80,000',
    mileage: '85,100',
    imgSrc: carSaleGls3,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '70,000',
    mileage: '36,935',
    imgSrc: carSaleGls4,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '45,000',
    mileage: '12,444',
    imgSrc: carSaleGls,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '56,000',
    mileage: '116,180',
    imgSrc: carSaleGls2,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '80,000',
    mileage: '85,100',
    imgSrc: carSaleGls3,
    imgAlt: 'Mercedes GLS-Class 2018'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '70,000',
    mileage: '36,935',
    imgSrc: carSaleGls4,
    imgAlt: 'Mercedes GLS-Class 2018'
  }
  //TODO: Add more items
];

import { Feedback } from '../../components/feedback';

export const HomePage: FC = () => {
  return (
    <div className={styles.page}>
      <WelcomeComponent />
      <AboutUs />
      <OurServices />
      <SaleCarsCarousel items={carItems} />
      <Feedback
        name='Alex Safdsfsdgdf'
        review='Reliable and honest craftsmen! I can always trust them completely with my vehicle. They do everything they can to keep my vehicle running flawlessly.'
        imgSrc='https://i.pravatar.cc/300'
      />
    </div>
  );
};
