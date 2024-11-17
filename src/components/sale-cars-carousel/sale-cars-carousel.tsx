import { FC } from 'react';
import { TSaleCarsCarouselProps } from './types.ts';
import { SaleCarsCarouselUI } from '../ui/sale-cars-carousel';

import { useDispatch, useSelector } from '../../store/store';
import { RootState } from '../../store/store';
import { fetchCars } from '../../slices/carsSlice';
import { useEffect } from 'react';

export const SaleCarsCarousel: FC<TSaleCarsCarouselProps> = ({
  slidesToShow,
  slidesToScroll
}) => {
  const settingsAdditional = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false
  };

  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector((state: RootState) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <SaleCarsCarouselUI
      cars={cars}
      isLoading={isLoading}
      settingsAdditional={settingsAdditional}
    />
  );
};
