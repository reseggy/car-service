import { FC } from 'react';
import styles from './about-services-page.module.css';
import { AboutServicesDescription } from '../../components/about-services-description';

export const AboutServicesPage: FC = () => {
  return (
    <div className={styles.page}>
      <AboutServicesDescription />
    </div>
  );
};
