import { FC, useState, useEffect } from 'react';
import { TCar } from '../../types/types';
import { CarForSaleUI } from '../ui/car-for-sale';

export const CarForSale: FC<TCar> = (car) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [isModalOpen]);

  return (
    <CarForSaleUI
      car={car}
      onClick={onClick}
      onClose={onClose}
      isModalOpen={isModalOpen}
    />
  );
};
