import { FC } from 'react';
import styles from './home-page.module.css';
import { WelcomeComponent } from '../../components/welcome-component';
import { AboutUs } from '../../components/about-us';
import { OurServices } from '../../components/our-services';
import { SaleCarsCarousel } from '../../components/sale-cars-carousel';
import { FeedbackCarousel } from '../../components/feedback-carousel';
import { InstagramPosts } from '../../components/instagram-posts';
import {
  carItems,
  userItems,
  instagramItems,
  servicesElementsMain
} from '../../mock.ts';
export const HomePage: FC = () => {
  return (
    <div className={styles.page}>
      <WelcomeComponent />
      <AboutUs />
      <OurServices servicesElements={servicesElementsMain} target='main' />
      <SaleCarsCarousel items={carItems} />
      <FeedbackCarousel feedbacks={userItems} />
      <InstagramPosts items={instagramItems} />
    </div>
  );
};
