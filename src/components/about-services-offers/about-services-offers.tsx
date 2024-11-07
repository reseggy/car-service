import { FC } from 'react';
import { TAboutServicesOffersProps } from './types';
import { AboutServicesOffersUI } from '../ui/about-services-offers';

export const AboutServicesOffers: FC<TAboutServicesOffersProps> = ({
  offers
}) => {
  return <AboutServicesOffersUI offers={offers} />;
};
