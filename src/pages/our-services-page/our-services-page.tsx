import { FC, lazy, Suspense } from 'react';
import styles from './our-services-page.module.css';
import { Preloader } from '../../components/ui/preloader';

import { useDispatch, useSelector } from '../../store/store';
import { RootState } from '../../store/store';
import { fetchServices } from '../../slices/servicesSlice';
import { useEffect } from 'react';

const OurServices = lazy(() =>
  import('../../components/our-services').then((module) => ({
    default: module.OurServices
  }))
);

export const OurServicesPage: FC = () => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector(
    (state: RootState) => state.services
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Suspense fallback={<Preloader />}>
        <OurServices
          servicesElements={services}
          isLoading={isLoading}
          target='additional'
        />
      </Suspense>
    </div>
  );
};
