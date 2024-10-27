import { FC } from 'react';
import { TCar } from '../../types/types';
import { CarForSaleUI } from '../ui/car-for-sale';

export const CarForSale: FC<TCar> = (car) => {
  return <CarForSaleUI car={car} />;
};

// Сделать при клике внутри карусели перенаправление на отдельную ссылку с модалкой(может на страницу saleCArs где будет открыта модалка с машиной), при клике на странице продаже оставить как есть. Добавить айдишники машинам и реализовать открытие модалки по отдельной ссылке!
