import { FC } from 'react';
import { WelcomeComponent } from '../../components/welcome-component';
import { AboutUs } from '../../components/about-us';
import styles from './home-page.module.css';
import { OurServices } from '../../components/our-services';

export const HomePage: FC = () => {
  return (
    <div className={styles.page}>
      <WelcomeComponent />
      <AboutUs />
      <OurServices />
    </div>
  );
};
