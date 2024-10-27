import { FC } from 'react';
import styles from './our-services.module.scss';
import { OurServices } from '../../components/our-services';
import { servicesElementsAdditional } from '../../mock';

export const OurServicesPage: FC = () => {
  return (
    <OurServices
      servicesElements={servicesElementsAdditional}
      target='additional'
    />
  );
};
