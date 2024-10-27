import { FC } from 'react';
import { OurServicesUI } from '../ui/our-services/our-services';
import { TOurServicesProps } from './types';

export const OurServices: FC<TOurServicesProps> = ({
  servicesElements,
  target
}) => {
  return <OurServicesUI servicesElements={servicesElements} target={target} />;
};
