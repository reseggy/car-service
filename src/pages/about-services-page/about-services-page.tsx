import { FC, lazy, Suspense } from 'react';
import styles from './about-services-page.module.css';
import { AboutServicesDescription } from '../../components/about-services-description';
import { benefitsAdvantages, servicesOffers } from '../../mock';
import { Preloader } from '../../components/ui/preloader';

const Benefits = lazy(() =>
  import('../../components/benefits').then((module) => ({
    default: module.Benefits
  }))
);

const AboutServicesOffers = lazy(() =>
  import('../../components/about-services-offers').then((module) => ({
    default: module.AboutServicesOffers
  }))
);

export const AboutServicesPage: FC = () => {
  return (
    <div className={styles.page}>
      <AboutServicesDescription />
      <Suspense fallback={<Preloader />}>
        <Benefits advantages={benefitsAdvantages} />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <AboutServicesOffers offers={servicesOffers} />
      </Suspense>
    </div>
  );
};
