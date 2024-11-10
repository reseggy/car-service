import { FC } from 'react';
import styles from './home-page.module.css';
import { WelcomeComponent } from '../../components/welcome-component';
import { AboutUs } from '../../components/about-us';
import { OurServices } from '../../components/our-services';
import { SaleCarsCarousel } from '../../components/sale-cars-carousel';
import { FeedbackCarousel } from '../../components/feedback-carousel';
import { InstagramPosts } from '../../components/instagram-posts';
import { useCarsCarouselSettings } from '../../hooks/useCarsCarouselSettings';
import { useFeedbackCarouselSettings } from '../../hooks/useFeedbackCarouselSettings';
import {
  carItems,
  userItems,
  instagramItems,
  servicesElementsMain,
  aboutUsAdvantages
} from '../../mock.ts';

export const HomePage: FC = () => {
  const carouselCarsSettings = useCarsCarouselSettings();
  const carouselFeedbackSettings = useFeedbackCarouselSettings();

  return (
    <div className={styles.page}>
      <WelcomeComponent />
      <AboutUs advantages={aboutUsAdvantages} />
      <OurServices servicesElements={servicesElementsMain} target='main' />
      <SaleCarsCarousel items={carItems} {...carouselCarsSettings} />
      <FeedbackCarousel feedbacks={userItems} {...carouselFeedbackSettings} />
      <InstagramPosts items={instagramItems} />
    </div>
  );
};
