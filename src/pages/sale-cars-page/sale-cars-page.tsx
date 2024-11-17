import { FC, lazy, Suspense } from 'react';
import { Preloader } from '../../components/ui/preloader';
import styles from './sale-cars-page.module.css';

const SaleCars = lazy(() =>
  import('../../components/sale-cars').then((module) => ({
    default: module.SaleCars
  }))
);
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

  return (
    <div className={styles.page}>
      <Suspense fallback={<Preloader />}>
        <SaleCars items={cars} isLoading={isLoading} />
      </Suspense>
    </div>
  );
};
