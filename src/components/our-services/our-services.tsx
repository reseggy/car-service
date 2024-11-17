import { FC } from 'react';
import { OurServicesUI } from '../ui/our-services/our-services';
import { TOurServicesProps } from './types';

export const OurServices: FC<TOurServicesProps> = ({
  servicesElements,
  isLoading,
  target
}) => {
  return (
    <OurServicesUI
      servicesElements={servicesElements}
      isLoading={isLoading}
      target={target}
    />
  );
};
