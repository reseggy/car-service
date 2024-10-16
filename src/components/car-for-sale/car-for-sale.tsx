import { FC } from 'react';
import { TCarForSaleProps } from './types.ts';
import { CarForSaleUI } from '../ui/car-for-sale';

export const CarForSale: FC<TCarForSaleProps> = ({
  title,
  price,
  mileage,
  imgSrc,
  imgAlt
}) => {
  return (
    <CarForSaleUI
      title={title}
      price={price}
      mileage={mileage}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
    />
  );
};
