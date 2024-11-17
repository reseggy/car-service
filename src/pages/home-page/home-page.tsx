import { FC, lazy, Suspense } from 'react';
import styles from './home-page.module.css';
import { WelcomeComponent } from '../../components/welcome-component';
import { Preloader } from '../../components/ui/preloader';
import { useCarsCarouselSettings } from '../../hooks/useCarsCarouselSettings';
import { useFeedbackCarouselSettings } from '../../hooks/useFeedbackCarouselSettings';

const AboutUs = lazy(() =>
  import('../../components/about-us').then((module) => ({
    default: module.AboutUs
  }))
);

const OurServices = lazy(() =>
  import('../../components/our-services').then((module) => ({
    default: module.OurServices
  }))
);

const SaleCarsCarousel = lazy(() =>
  import('../../components/sale-cars-carousel').then((module) => ({
    default: module.SaleCarsCarousel
  }))
);

const FeedbackCarousel = lazy(() =>
  import('../../components/feedback-carousel').then((module) => ({
    default: module.FeedbackCarousel
  }))
);

const InstagramPosts = lazy(() =>
  import('../../components/instagram-posts').then((module) => ({
    default: module.InstagramPosts
  }))
);

import postPhoto1 from '@assets/photos/post1.jpg';
import postPhoto2 from '@assets/photos/post2.png';
import postPhoto3 from '@assets/photos/post3.jpg';

import serviceBrake from '@assets/photos/serviceBrake.png';
import serviceEngine from '@assets/photos/serviceEngine.png';
import serviceOil from '@assets/photos/serviceOil.png';
import serviceWheel from '@assets/photos/serviceWheel.png';

import gearIcon from '@assets/svg/gear.svg';
import engineIcon from '@assets/svg/engine.svg';
import wrenchIcon from '@assets/svg/wrench.svg';
import handshakeIcon from '@assets/svg/handshake.svg';

const aboutUsAdvantages = [
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

const servicesElementsMain = [
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

const instagramItems = [
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

export const HomePage: FC = () => {
  const carouselCarsSettings = useCarsCarouselSettings();
  const carouselFeedbackSettings = useFeedbackCarouselSettings();

  return (
    <div className={styles.page}>
      <WelcomeComponent />

      <Suspense fallback={<Preloader />}>
        <AboutUs advantages={aboutUsAdvantages} />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <OurServices servicesElements={servicesElementsMain} target='main' />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <SaleCarsCarousel {...carouselCarsSettings} />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <FeedbackCarousel {...carouselFeedbackSettings} />
      </Suspense>

      <Suspense fallback={<Preloader />}>
        <InstagramPosts items={instagramItems} />
      </Suspense>
    </div>
  );
};
