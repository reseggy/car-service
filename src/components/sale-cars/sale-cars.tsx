import { FC } from 'react';
import { SaleCarsUI } from '../ui/sale-cars/sale-cars';
import { TSaleCarsProps } from './types.ts';

export const SaleCars: FC<TSaleCarsProps> = ({ items, isLoading }) => {
  return <SaleCarsUI items={items} isLoading={isLoading} />;
};
