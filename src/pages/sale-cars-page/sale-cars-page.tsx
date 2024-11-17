import { FC } from 'react';
import { SaleCars } from '../../components/sale-cars';

import { useDispatch, useSelector } from '../../store/store';
import { RootState } from '../../store/store';
import { fetchCars } from '../../slices/carsSlice';
import { useEffect } from 'react';

export const SaleCarsPage: FC = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector((state: RootState) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <SaleCars items={cars} isLoading={isLoading} />;
};
