import { FC } from 'react';
import { AboutUsUI } from '../ui/about-us';
import { AboutUsProps } from './types';

export const AboutUs: FC<AboutUsProps> = ({ advantages }) => {
  return <AboutUsUI advantages={advantages} />;
};
