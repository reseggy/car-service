import { FC } from 'react';
import styles from './our-services-page.module.css';
import { OurServices } from '../../components/our-services';
import { servicesElementsAdditional } from '../../mock';

export const OurServicesPage: FC = () => {
  return (
    <div className={styles.page}>
      <OurServices
        servicesElements={servicesElementsAdditional}
        target='additional'
      />
    </div>
  );
};
