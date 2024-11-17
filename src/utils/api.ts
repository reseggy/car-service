import fetchMock from 'fetch-mock';
import { TCar, TFeedbacks, TService } from '../types/types';

import photoGls1 from '@assets/photos/cars/gls1.webp';
import photoGls2 from '@assets/photos/cars/gls2.webp';
import photoGls3 from '@assets/photos/cars/gls3.webp';
import photoGls4 from '@assets/photos/cars/gls4.webp';

import photoX5_1 from '@assets/photos/cars/x5_1.webp';
import photoX5_2 from '@assets/photos/cars/x5_2.webp';
import photoX5_3 from '@assets/photos/cars/x5_3.webp';
import photoX5_4 from '@assets/photos/cars/x5_4.webp';

import photoQ7_1 from '@assets/photos/cars/q7_1.webp';
import photoQ7_2 from '@assets/photos/cars/q7_2.webp';
import photoQ7_3 from '@assets/photos/cars/q7_3.webp';
import photoQ7_4 from '@assets/photos/cars/q7_4.webp';

import photoLX_1 from '@assets/photos/cars/lx_1.webp';
import photoLX_2 from '@assets/photos/cars/lx_2.webp';
import photoLX_3 from '@assets/photos/cars/lx_3.webp';
import photoLX_4 from '@assets/photos/cars/lx_4.webp';

import serviceBrake from '@assets/photos/serviceBrake.png';

const cars: TCar[] = [
  {
    title: 'Mercedes GLS-Class 2018',
    price: '45,000',
    mileage: '12,444',
    imgSrc: photoGls1,
    imgSrc2: photoGls2,
    imgSrc3: photoGls3,
    imgSrc4: photoGls4,
    imgAlt: 'Mercedes GLS-Class 2018',
    model: 'GLS 450',
    year: '2018',
    exteriorColor: 'Black',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L V6',
    id: '1'
  },
  {
    title: 'BMW X5 2019',
    price: '56,000',
    mileage: '16,180',
    imgSrc: photoX5_1,
    imgSrc2: photoX5_2,
    imgSrc3: photoX5_3,
    imgSrc4: photoX5_4,
    imgAlt: 'BMW X5 2019',
    model: 'X5 xDrive40i',
    year: '2019',
    exteriorColor: 'White',
    interiorColor: 'Beige',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L I6',
    id: '2'
  },
  {
    title: 'Audi Q7 2020',
    price: '80,000',
    mileage: '25,100',
    imgSrc: photoQ7_1,
    imgSrc2: photoQ7_2,
    imgSrc3: photoQ7_3,
    imgSrc4: photoQ7_4,
    imgAlt: 'Audi Q7 2020',
    model: 'Q7 55 TFSI',
    year: '2020',
    exteriorColor: 'Blue',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L V6',
    id: '3'
  },
  {
    title: 'Lexus LX 2021',
    price: '70,000',
    mileage: '36,935',
    imgSrc: photoLX_1,
    imgSrc2: photoLX_2,
    imgSrc3: photoLX_3,
    imgSrc4: photoLX_4,
    imgAlt: 'Lexus LX 2021',
    model: 'LX 350',
    year: '2021',
    exteriorColor: 'Red',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.5L V6',
    id: '4'
  },
  {
    title: 'Mercedes GLS-Class 2018',
    price: '45,000',
    mileage: '12,444',
    imgSrc: photoGls1,
    imgSrc2: photoGls2,
    imgSrc3: photoGls3,
    imgSrc4: photoGls4,
    imgAlt: 'Mercedes GLS-Class 2018',
    model: 'GLS 450',
    year: '2018',
    exteriorColor: 'Black',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L V6',
    id: '5'
  },
  {
    title: 'BMW X5 2019',
    price: '56,000',
    mileage: '16,180',
    imgSrc: photoX5_1,
    imgSrc2: photoX5_2,
    imgSrc3: photoX5_3,
    imgSrc4: photoX5_4,
    imgAlt: 'BMW X5 2019',
    model: 'X5 xDrive40i',
    year: '2019',
    exteriorColor: 'White',
    interiorColor: 'Beige',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L I6',
    id: '6'
  },
  {
    title: 'Audi Q7 2020',
    price: '80,000',
    mileage: '25,100',
    imgSrc: photoQ7_1,
    imgSrc2: photoQ7_2,
    imgSrc3: photoQ7_3,
    imgSrc4: photoQ7_4,
    imgAlt: 'Audi Q7 2020',
    model: 'Q7 55 TFSI',
    year: '2020',
    exteriorColor: 'Blue',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.0L V6',
    id: '7'
  },
  {
    title: 'Lexus LX 2021',
    price: '70,000',
    mileage: '36,935',
    imgSrc: photoLX_1,
    imgSrc2: photoLX_2,
    imgSrc3: photoLX_3,
    imgSrc4: photoLX_4,
    imgAlt: 'Lexus LX 2021',
    model: 'LX 570',
    year: '2021',
    exteriorColor: 'Red',
    interiorColor: 'Black',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.5L V6',
    id: '8'
  }
];

const feedbacks: TFeedbacks[] = [
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

const services = [
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  }
];

if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'production'
) {
  fetchMock.mockGlobal();

  fetchMock.get('/api/cars', cars);

  fetchMock.get('/api/feedbacks', feedbacks);

  fetchMock.get('/api/services', services);
}

export const getCarsApi = async (): Promise<TCar[]> => {
  const response = await fetch('/api/cars');
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getFeedbacksApi = async (): Promise<TFeedbacks[]> => {
  const response = await fetch('/api/feedbacks');
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getServicesApi = async (): Promise<TService[]> => {
  const response = await fetch('/api/services');
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
