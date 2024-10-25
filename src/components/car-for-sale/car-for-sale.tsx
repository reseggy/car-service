import { FC } from 'react';
import { TCar } from '../../types/types';
import { CarForSaleUI } from '../ui/car-for-sale';

export const CarForSale: FC<TCar> = (car) => {
  return <CarForSaleUI car={car} />;
};
