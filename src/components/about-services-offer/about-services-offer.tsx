import { FC } from 'react';
import { AboutServicesOfferUI } from '../ui/about-services-offer';
import { AboutServicesOfferProps } from './types';

export const AboutServicesOffer: FC<AboutServicesOfferProps> = (offer) => {
  return <AboutServicesOfferUI {...offer} />;
};
