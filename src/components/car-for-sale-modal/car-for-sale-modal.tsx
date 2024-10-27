import { FC } from 'react';
import { CarForSaleModalUI } from '../ui/car-for-sale-modal';
import { TCarForSaleModalProps } from './types';
import { useNavigate } from 'react-router-dom';

export const CarForSaleModal: FC<TCarForSaleModalProps> = ({
  car,
  onClose
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/contacts');
  };

  const carInfo = [
    { title: 'Model:', value: car.model },
    { title: 'Year:', value: car.year },
    { title: 'Exterior color:', value: car.exteriorColor },
    { title: 'Interior color:', value: car.interiorColor },
    { title: 'Drivetrain:', value: car.drivetrain },
    { title: 'Fuel type:', value: car.fuelType },
    { title: 'Transmission:', value: car.transmission },
    { title: 'Engine:', value: car.engine },
    { title: 'Mileage:', value: car.mileage }
  ];

  return (
    <CarForSaleModalUI
      car={car}
      onClose={onClose}
      carInfo={carInfo}
      onClick={onClick}
    />
  );
};

//добавить анимацию для модалки
