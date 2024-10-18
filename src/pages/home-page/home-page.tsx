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
import { FeedbackCarousel } from '../../components/feedback-carousel';

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

const userItems = [
  {
    name: 'Peter Parker',
    review:
      'Reliable and honest craftsmen! I can always trust them completely with my vehicle. They do everything they can to keep my vehicle running flawlessly.',
    imgSrc: 'https://i.pravatar.cc/300'
  },
  {
    name: 'Alina',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/301'
  },
  {
    name: 'Elisa',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/302'
  },
  {
    name: 'Jeremy',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/303'
  },
  {
    name: 'Julia',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/304'
  },
  {
    name: 'Peter Parker',
    review:
      'Reliable and honest craftsmen! I can always trust them completely with my vehicle. They do everything they can to keep my vehicle running flawlessly.',
    imgSrc: 'https://i.pravatar.cc/300'
  },
  {
    name: 'Alina',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/301'
  },
  {
    name: 'Elisa',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/302'
  },
  {
    name: 'Jeremy',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/303'
  },
  {
    name: 'Julia',
    review:
      'Lorem ipsum dolor sit amet consectetur. Diam tortor scelerisque elit augue rhoncus semper porttitor donec id. Pellentesque gravida quis id nunc. Feugiat.',
    imgSrc: 'https://i.pravatar.cc/304'
  }
];

export const HomePage: FC = () => {
  return (
    <div className={styles.page}>
      <WelcomeComponent />
      <AboutUs />
      <OurServices />
      <SaleCarsCarousel items={carItems} />
      <FeedbackCarousel feedbacks={userItems} />
    </div>
  );
};
