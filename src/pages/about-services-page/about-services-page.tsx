import { FC } from 'react';
import styles from './about-services-page.module.css';
import { AboutServicesDescription } from '../../components/about-services-description';
import { Benefits } from '../../components/benefits';
import { AboutServicesOffers } from '../../components/about-services-offers';
import { benefitsAdvantages, servicesOffers } from '../../mock';

export const AboutServicesPage: FC = () => {
  return (
    <div className={styles.page}>
      <AboutServicesDescription />
      <Benefits advantages={benefitsAdvantages} />
      <AboutServicesOffers offers={servicesOffers} />
    </div>
  );
};
