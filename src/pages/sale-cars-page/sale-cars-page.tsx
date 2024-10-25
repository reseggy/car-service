import { FC } from 'react';
import { SaleCars } from '../../components/sale-cars';
import { carItems } from '../../mock.ts';

export const SaleCarsPage: FC = () => {
  return <SaleCars items={carItems} />;
};
