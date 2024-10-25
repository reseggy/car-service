import { FC } from 'react';
import { CarForSaleModalUI } from '../ui/car-for-sale-modal';
import { TCarForSaleModalProps } from './types';

export const CarForSaleModal: FC<TCarForSaleModalProps> = ({
  car,
  onClose
}) => {
  return <CarForSaleModalUI car={car} onClose={onClose} />;
};
