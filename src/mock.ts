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

import postPhoto1 from '@assets/photos/post1.jpg';
import postPhoto2 from '@assets/photos/post2.png';
import postPhoto3 from '@assets/photos/post3.jpg';

import serviceBrake from '@assets/photos/serviceBrake.png';
import serviceEngine from '@assets/photos/serviceEngine.png';
import serviceOil from '@assets/photos/serviceOil.png';
import serviceWheel from '@assets/photos/serviceWheel.png';

import { TCar } from './types/types';

export const carItems: TCar[] = [
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

export const userItems = [
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

export const instagramItems = [
  {
    imgSrc: postPhoto1,
    likes: 111,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...'
  },
  {
    imgSrc: postPhoto2,
    likes: 222,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae non facilis in reprehenderit nam odio tenetur similique quis consequuntur excepturi deleniti, atque sed! Officiis dolores nihil quo sed deleniti.'
  },
  {
    imgSrc: postPhoto3,
    likes: 333,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia harum ut repellat dolorem quam suscipit facere incidunt neque distinctio voluptas voluptatibus numquam veritatis, nihil repellendus, quis accusamus eum, sequi fugit nulla nisi? Provident dignissimos unde corporis tempora accusantium nesciunt, explicabo architecto illo ullam minus quibusdam nobis dolor at delectus laborum eum. Culpa obcaecati autem dolorum voluptatibus, fuga quaerat? Autem inventore earum minima nesciunt quis, asperiores suscipit deleniti perferendis ab totam explicabo cupiditate ipsum blanditiis magnam, voluptatibus molestiae? Optio, eligendi obcaecati totam nobis fuga provident porro quaerat placeat qui esse corporis minus quibusdam doloremque dolore maxime odit in inventore pariatur voluptatibus.'
  }
];

export const servicesElementsMain = [
  {
    title: 'Brake system repair',
    text: 'From pedal adjustments to hydraulic fluid replacement, our experts can repair brakes of any make and model.',
    imgSrc: serviceBrake,
    imgAlt: 'brake system repair'
  },
  {
    title: 'Engine repair',
    text: 'We keep a close eye on the condition of your engine, offering services that will reduce the likelihood of future engine replacement.',
    imgSrc: serviceEngine,
    imgAlt: 'Engine repair'
  },
  {
    title: 'Oil change',
    text: 'Regular oil and filter changes are one of the most effective and affordable ways to protect your vehicle.',
    imgSrc: serviceOil,
    imgAlt: 'Oil change'
  },
  {
    title: 'Wheel replacement',
    text: 'We perform a wide range of wheel replacement services, including emergency tire replacement in the event of a breakdown on the road.',
    imgSrc: serviceWheel,
    imgAlt: 'Wheel replacement'
  }
];

export const servicesElementsAdditional = [
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

export const dropdownServices = [
  { id: 1, text: 'Complete service for all makes of cars' },
  { id: 2, text: 'Air conditioning servicing, filling and cleaning' },
  { id: 3, text: '3D Geometry' },
  { id: 4, text: 'Full films, protective and darkening films for glass' },
  { id: 5, text: 'Ceramics' },
  { id: 6, text: 'Bodywork parts' },
  { id: 7, text: 'Car sales and rental' },
  { id: 8, text: 'Painting of all parts' },
  { id: 9, text: 'Stk and transcription of vehicles' },
  {
    id: 10,
    text: 'Tyre service for passenger, off-road and commercial vehicles'
  },
  { id: 11, text: 'Vehicle washing and interior cleaning' }
];

export const dropdownLanguage = [
  { id: 1, text: 'ENG' },
  { id: 2, text: 'CZ' }
];
import gearIcon from '@assets/svg/gear.svg';
import engineIcon from '@assets/svg/engine.svg';
import wrenchIcon from '@assets/svg/wrench.svg';
import handshakeIcon from '@assets/svg/handshake.svg';

export const aboutUsAdvantages = [
  {
    title: 'Professional services',
    text: 'Our experienced craftsmen provide high quality service to your vehicle, solving any problems.',
    imgSrc: gearIcon,
    imgAlt: 'icon professional services'
  },
  {
    title: 'Fast repairs',
    text: "We value your time and offer prompt solutions to your vehicle's problems, minimizing downtime.",
    imgSrc: engineIcon,
    imgAlt: 'icon fast repairs'
  },
  {
    title: 'Guaranteed quality',
    text: 'We use only top-quality parts and materials, ensuring long-term reliability of your vehicle.',
    imgSrc: wrenchIcon,
    imgAlt: 'icon guaranteed quality'
  },
  {
    title: 'Customer-oriented approach',
    text: 'We strive for complete customer satisfaction by providing personalized service and support.',
    imgSrc: handshakeIcon,
    imgAlt: 'icon customer-oriented approach'
  }
];

export const benefitsAdvantages = [
  {
    title: 'Express diagnostics and repairs',
    text: 'Fast and accurate diagnostics is our first step to your satisfaction. With advanced diagnostic tools and an experienced team of experts, we will detect problems immediately and proceed to efficient repairs. Your vehicle will be back on the road in the shortest possible time.'
  },
  {
    title: 'Individual approach and customer service',
    text: 'Every customer is unique to us, which is why we approach service with individual attention to your needs. We provide expert advice, transparent information about the work carried out and always strive to find the optimal solution for each client.'
  },
  {
    title: 'Quality spare parts and customized services',
    text: "Our collaboration with verified suppliers allows us to provide quality spare parts and materials for every type of vehicle. Combined with our bespoke services, you get a complete service that matches your car's exact needs."
  }
];

export const servicesOffers = [
  {
    text: 'Regular technical inspections and diagnostics'
  },
  {
    text: 'Engine, brake, chassis and electronics repairs'
  },
  {
    text: 'Oil and filter changes'
  },
  {
    text: 'Wheel alignment'
  },
  {
    text: 'Air conditioning service and coolant replacement'
  },
  {
    text: 'Tyre service and seasonal retreading'
  },
  {
    text: 'Expert advice and consultation'
  }
];
