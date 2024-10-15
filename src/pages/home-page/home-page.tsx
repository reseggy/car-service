import { FC } from 'react';
import { WelcomeComponent } from '../../components/welcome-component';
import { AboutUs } from '../../components/about-us';

export const HomePage: FC = () => {
  return (
    <>
      <WelcomeComponent />
      <AboutUs />
    </>
  );
};
