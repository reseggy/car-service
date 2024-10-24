import { FC } from 'react';
import { SaleCars } from '../../components/sale-cars';
import carSaleGls from '@assets/photos/carSaleGls.png';
import carSaleGls2 from '@assets/photos/carSaleGls2.png';
import carSaleGls3 from '@assets/photos/carSaleGls3.png';
import carSaleGls4 from '@assets/photos/carSaleGls4.png';

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

export const SaleCarsPage: FC = () => {
  return <SaleCars items={carItems} />;
};
